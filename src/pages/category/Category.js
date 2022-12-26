import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { getOneCategoryItems } from '../../http/mainPageApi';
import styles from "./category.module.css";

const Category = () => {
    const [loading, setLoading] = useState(true);
    const params = useParams()
    const [titleSubCategorys, setTitleSubCategorys] = useState([])

    useEffect(() => {
      (async function () {        
        await getOneCategoryItems(params.id).then(async (data) => {
          setTitleSubCategorys(data);
        }).finally(() => {setLoading(false)});
      })();
    }, [params]);
    if (loading) {
        return (
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
            className="d-flex"
          >
            <MoonLoader color="#000000" />
          </div>
        );
      }
    return (
        <div>
            
        </div>
    );
};

export default Category;