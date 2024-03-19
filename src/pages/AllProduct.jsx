import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import ProductItem from "../components/allProduct/ProductItem";
import Paginate from "../components/paginate/Paginate";
import { toast } from "react-toastify";
import { Col, Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function AllProduct() {
    const { key } = useParams(); //search key from header
    const [products, setProducts] = useState([]); //productlist that use for display
    const [categories, setCategories] = useState([]); //category
    const [isLoading, setIsLoading] = useState(false); //loading effect

    // filtering
    const [nameSearch, setNameSearch] = useState(key ? key : "");
    const [year_f, setYear_f] = useState([]);
    const [category_f, setCategory_f] = useState([]);
    const [ram_f, setRam_f] = useState("");
    const [screen_f, setScreen_f] = useState("");

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    //

    //category
    useEffect(() => {
        fetch(`http://localhost:9999/categories`)
            .then((res) => res.json())
            .then((json) => setCategories(json));
    }, []);

    var currentYear = new Date().getFullYear();
    const years = [currentYear--, currentYear--, currentYear--, currentYear--];

    const handleFilter = (page) => {
        setIsLoading(true);
        var url = `http://localhost:9999/products/all?page=${page}&limit=12`;

        if (nameSearch) {
            url += `&name=${nameSearch}`;
        }

        if (category_f) {
            category_f?.map((b) => (url += "&categoryId=" + b));
        }

        if (year_f) {
            year_f?.map((b) => (url += "&year=" + b));
        }

        if (ram_f) {
            url += `&ram=${ram_f}`;
        }

        if (screen_f) {
            url += `&screen=${screen_f}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setProducts(json.data);
                setTotalPages(Math.ceil(json.count / 10));
                setIsLoading(false);
            })
            .catch((err) => toast.error(err));
    };

    useEffect(() => {
        handleFilter(currentPage);
    }, [currentPage, category_f, year_f, nameSearch, ram_f, screen_f]);

    const SortProduct = (index) => {
        const newProducts = [...products];
        if (index === 0) newProducts.sort((a, b) => b.feartured - a.feartured);
        if (index === 1) newProducts.sort((a, b) => a.name.localeCompare(b.name));
        if (index === 2) newProducts.sort((a, b) => b.name.localeCompare(a.name));
        if (index === 3) newProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        if (index === 4) newProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        if (index === 5) newProducts.sort((a, b) => a.id - b.id);
        if (index === 6) newProducts.sort((a, b) => b.id - a.id);
        console.log(newProducts);
        setProducts(newProducts);
    };

    const handleFilterValue = (attr) => {
        if (attr === "category") {
            let box = document.getElementsByName("cate-Filter-Box");
            let temp = [];
            for (let i = 0; i < box.length; i++) {
                if (box[i].checked === true) {
                    temp = [...temp, box[i].value];
                }
            }
            setCategory_f(temp);
        }
        if (attr === "year") {
            let box = document.getElementsByName("year-Filter-Box");
            let temp = [];
            for (let i = 0; i < box.length; i++) {
                if (box[i].checked === true) {
                    temp = [...temp, box[i].value];
                }
            }
            setYear_f(temp);
        }
    };
    return (
        <>
            <Header />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop By Categories</h3>

                            <div
                                className="btn-group d-flex flex-column"
                                role="group"
                                aria-label="Basic checkbox toggle button group"
                            >
                                {categories.map((c) => (
                                    <div key={c._id}>
                                        <input
                                            onChange={() => handleFilterValue("category")}
                                            name="cate-Filter-Box"
                                            type="checkbox"
                                            className="btn-check"
                                            id={"btncheck" + c._id}
                                            autoComplete="off"
                                            value={c._id}
                                        />
                                        <label
                                            style={{ width: "150px" }}
                                            className="btn btn-outline-primary"
                                            htmlFor={"btncheck" + c._id}
                                        >
                                            {c.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className="sub-title">Release year</h5>
                                <div
                                    className="btn-group d-flex flex-column"
                                    role="group"
                                    aria-label="Basic checkbox toggle button group"
                                >
                                    {years.map((y) => (
                                        <div key={y}>
                                            <input
                                                onChange={() => handleFilterValue("year")}
                                                name="year-Filter-Box"
                                                value={y}
                                                type="checkbox"
                                                className="btn-check"
                                                id={"yearCheck" + y}
                                                autoComplete="off"
                                            />
                                            <label
                                                style={{ width: "100px" }}
                                                className="btn btn-outline-primary"
                                                htmlFor={"yearCheck" + y}
                                            >
                                                {y}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                {/* <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input
                                            onChange={(e) => setMin_f(e.target.value)}
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            onChange={(e) => setMax_f(e.target.value)}
                                            type="email"
                                            className="form-control"
                                            id="floatingInput1"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                                        Ram:
                                    </p>
                                    <select
                                        onChange={(e) => setRam_f(e.target.value)}
                                        name="sort"
                                        defaultValue={"manula"}
                                        className="form-control form-select"
                                        id="sort-box"
                                    >
                                        <option value="3GB">3GB</option>
                                        <option value="4GB">4GB</option>
                                        <option value="6GB">6GB</option>
                                        <option value="8GB">8GB</option>
                                        <option value="16GB">16GB</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                                        Screen:
                                    </p>
                                    <select
                                        onChange={(e) => setScreen_f(e.target.value)}
                                        name="sort"
                                        defaultValue={"manula"}
                                        className="form-control form-select"
                                        id="sort-box"
                                    >
                                        <option value="6.1 inches">6.1 inches</option>
                                        <option value="6.7 inches">6.7 inches</option>
                                        <option value="7.9 inches">7.9 inches</option>
                                        <option value="8.3 inches">8.3 inches</option>
                                        <option value="10.2 inches">10.2 inches</option>
                                        <option value="10.9 inches">10.9 inches</option>
                                        <option value="11 inches">11 inches</option>
                                        <option value="13.3 inches">13.3 inches</option>
                                        <option value="13.6 inches">13.6 inches</option>
                                        <option value="14.2 inches">14.2 inches</option>
                                        <option value="16.2 inches">16.2 inches</option>
                                    </select>
                                </div>
                                <Col xs={12} md={4}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                            Search <BsSearch size={20} style={{ paddingLeft: "5px" }} className="m-0" />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="name"
                                            placeholder="Search by name..."
                                            value={nameSearch}
                                            onChange={(e) => setNameSearch(e.target.value)}
                                        />
                                    </InputGroup>
                                </Col>
                            </div>
                        </div>

                        <div className="products-list pb-5">
                            <div className="d-flex flex-wrap row">
                                {isLoading ? (
                                    <div className="spinner-grow" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    products.map((p) =>
                                        p.status ? (
                                            <div className="col-3" key={p._id}>
                                                <ProductItem product={p}></ProductItem>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination mb-3 justify-content-end">
                    <Paginate
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                    />
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default AllProduct;
