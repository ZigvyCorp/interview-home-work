import React, { useCallback, useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { FilterItem, ListProduct, Loading, PaginationComponent } from "components";
import FormSelect from "components/FormSelect/FormSelect";
import Sidebar from "components/SideBar/Sidebar";
import { productService } from "services/productService";
import { colors, tabTitle } from "utils/constants";
import { icons } from "utils/icons";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from 'redux/asyncAction';



const Product = () => {
  // const [selected, setSelected] = useState({ color: [], brand: [] });
  const { categories } = useSelector(state => state.productSlice)
  const [activeTab, setActiveTab] = useState(1);
  const [products, setProducts] = useState(null);
  const [sort, setSort] = useState("-price");
  const [totalItem, setTotalItem] = useState(0);
  const [brands, setBrands] = useState();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { category } = useParams();

  const { MdFilterListAlt } = icons;

  const priceSelect = [
    { id: 1, value: "-price", title: "Price: High to Low" },
    { id: 2, value: "price", title: "Price: Low to High" },
  ];



  const fetchAllProducts = async (queries) => {
    const response = await productService.handleGetAllProducts(queries);

    setProducts(response?.products);
    setTotalItem(response?.count);
  };

  const handleChangeValueSort = useCallback(
    (e) => {
      setSort(e.target.value);
    },
    [sort]
  );



  useEffect(() => {

    const param = [];

    for (let i of params.entries()) param.push(i);
    const queries = {};

    for (let i of param) queries[i[0]] = i[1];
    if (activeTab === 1) {
      queries.sort = "-sold";

    } else {
      queries.sort = "-createdAt";

    }


    navigate({
      path: `/products/${category}`,
      search: createSearchParams(queries).toString(),
    });

  }, [activeTab]);
  useEffect(() => {
    if (sort) {
      const param = [];

      for (let i of params.entries()) param.push(i);
      const queries = {};

      for (let i of param) queries[i[0]] = i[1];
      queries.sort = sort;

      navigate({
        path: `/products/${category}`,
        search: createSearchParams(queries).toString(),
      });
    }
  }, [sort]);

  useEffect(() => {
    dispatch(getAllCategories())



  }, [dispatch])

  useEffect(() => {
    const itemCategory = categories?.find((el) => el?.title?.toUpperCase() === category?.toUpperCase())
    setBrands(itemCategory?.brand)

  }, [category, categories])



  useEffect(() => {
    const param = [];

    for (let i of params.entries()) param.push(i);
    const queries = {};
    queries.limit = 8
    queries.sort = "-createdAt"

    for (let i of param) queries[i[0]] = i[1];
    fetchAllProducts({ ...queries, category });
  }, [params, category]);
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 mt-3 gap-5">
        <div>
          <Sidebar />
          <h1 className="text-xl font-semibold flex items-center  border-b-2 border-main px-3">
            <div className="text-[30px] py-3 ">
              <MdFilterListAlt />
            </div>
            FILTER BY
          </h1>
          <FilterItem
            sort={sort}

            title="Brand"
            data={brands}
            path={`/products/${category}`}
          />
          {/* <FilterItem
            sort={sort}

            title="Color"
            data={colors}
            path={`/products/${category}`}
          /> */}

        </div>

        <div className="col-span-4 relative">
          <div className="bg-gray-200 p-5 flex items-center mb-3">
            <div className="text-sm">Sort by</div>
            {tabTitle.map((el) => {
              return (
                <div
                  className={` px-3 py-2 ml-3 cursor-pointer ${activeTab === el.id ? "bg-feature text-hover" : "bg-sub"
                    }`}
                  onClick={() => setActiveTab(el.id)}
                  key={el.id}
                >
                  {el.title}
                </div>
              );
            })}

            <FormSelect
              setValue={handleChangeValueSort}
              value={sort}
              className="px-3 py-2 ml-3 cursor-pointer outline-none"
              name="sortPrice"
              options={priceSelect}
            />
          </div>
          <Loading isLoading={products ? false : true}>
            {/* <h1 className="mb-3 text-gray-700 text-xl font-semibold">{category}({totalItem})</h1> */}
            {products?.length > 0 ? (
              <>
                <ListProduct products={products} />
                <PaginationComponent
                  total={totalItem}
                  pageSize={8}
                />
              </>
            ) : (
              <div className="absolute top-[50%] left-[50%]">
                <p className="text-sub ">Not found Product</p>
              </div>
            )}
          </Loading>
        </div>
      </div>
    </div>
  );
};

export default Product;
