import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Pagination, Table } from "react-bootstrap"
import { useSelector } from "react-redux";
import getJokes from "../api/getJokes";
import getUserInfo from "../api/getUserInfo";

const LandingPage = () => {

    const [ratings, setRatings] = useState(new Map());
    const { isLoggedIn, token } = useSelector(s=>s);
    const [jokes, setJokes] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(33);

    // Credit goes to jeantoledo on GitHub for this function
    function pagination(currentPage, pageCount) {
        let delta = 2,
            left = currentPage - delta,
            right = currentPage + delta + 1,
            result = [];

        result = Array.from({length: pageCount}, (v, k) => k + 1)
            .filter(i => i && i >= left && i < right);

        return result;
    }

    useEffect(() => {

        if(!isLoggedIn)return;

        getUserInfo(token).then(({ ratings:rats }) => {

            for(const rat of rats) {
                ratings.set(rat.jokeGUID, rat);
            }
            setRatings(new Map([...ratings])); // Force update
            console.log(ratings);
        });
    }, [ isLoggedIn ]);

    useEffect(() => {

        getJokes(activePage, 5).then(j => {

            setTotalPages(j.totalPages);
            setJokes(j.jokes);
        })
        .catch(console.log);
    }, [activePage]);

    return (
        <div className="flex flex-col">

            <div className="flex justify-center mt-16">
                <div style={{ width: '50%', height: '75vh', overflowY: 'auto' }}>
                    <Table striped bordered hover>
                        <thead>
                            <th>Setup</th>
                            <th>Punchline</th>
                            <th>Category</th>
                            {
                                isLoggedIn?
                                <th>Opinion</th>:
                                ''
                            }
                        </thead>
                        <tbody>
                            {
                            jokes.map(
                                ({ setup, punchline, category: { name }, guid }, key) => 
                                    <tr key={key}>
                                        <td>{setup}</td>
                                        <td>{punchline}</td>
                                        <td>{name}</td>
                                        {
                                            isLoggedIn?
                                            <td>{
                                                    ratings.get(guid) === undefined?
                                                    'Neutral':
                                                    ratings.get(guid).opinion === true && 'Positive' || 'Negative'
                                                }</td>:
                                            ''
                                        }
                                    </tr>
                            )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="flex justify-center">
                <Pagination>
                    <Pagination.First onClick={() => setActivePage(1)} />
                    <Pagination.Prev onClick={() => activePage === 1?void 0:setActivePage(activePage-1)}/>
                    {
                        pagination(activePage, totalPages).map(
                            (i) => 
                                <Pagination.Item 
                                    key={i} 
                                    active={(i) === activePage}
                                    onClick={() => setActivePage(i)}
                                    >
                                    {i}
                                </Pagination.Item>
                        )
                    }
                    <Pagination.Next onClick={() => activePage === totalPages?void 0:setActivePage(activePage+1)}/>
                    <Pagination.Last onClick={() => setActivePage(totalPages)} />
                </Pagination>
            </div>
        </div>
    );
}

export default LandingPage;