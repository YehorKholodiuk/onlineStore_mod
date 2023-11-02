import {Col, Form, Row} from "react-bootstrap";
import storeItems from "../data/items.json"
import {StoreItem} from "../components/StoreItem.tsx";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {useEffect} from "react";

export function Store() {

    const {searchTerm, setSearchTerm, filteredItems, setFilteredItems} = useShoppingCart()

    useEffect(() => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const filtered = storeItems.filter((item) =>
                item.name.toLowerCase().includes(lowerCaseSearchTerm)
            );
            setSearchTerm(searchTerm)
            setFilteredItems(filtered)


        },
        [searchTerm]
    )


    return (
        <>
            <h1>Store</h1>
            <Form>
                <div className = "d-flex" >
                    <Form.Control
                        type="text"
                        placeholder="Search for items"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                </div>

            </Form>
            <Row md={2n} xs={1} lg={3} className="g-6">
                {
                    filteredItems.map(item => (
                        <Col key={item.id}>
                            {/*{JSON.stringify(item}*/}
                            <StoreItem {...item}/>
                        </Col>
                    ))
                }
            </Row>
        </>

    )
}
