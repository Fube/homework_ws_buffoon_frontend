import { useState } from "react";
import { Container, Pagination } from "react-bootstrap"

const LandingPage = () => {

    const [items, setItems] = useState(['foo','bar','baz']);
    const [active, setActive] = useState(0);

    return (
        <div className="flex justify-center mt-64">
            <Pagination>
                {
                    items.map(
                        (n, i) =>
                            <Pagination.Item 
                                key={i} 
                                active={i === active}
                                onClick={() => setActive(i)}
                                >
                                {n}
                            </Pagination.Item>
                    )
                }
            </Pagination>
        </div>
    );
}

export default LandingPage;