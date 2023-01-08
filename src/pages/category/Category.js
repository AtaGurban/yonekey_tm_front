import { observer } from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { getAllSlider, getOneCategoryItems } from '../../http/mainPageApi';
import Slider from '../main/components/Slider';
import styles from "./category.module.css";
import ProductSubCategory from './ProductSubCategory';

const Category = observer(() => {
    const [loading, setLoading] = useState(true);
    const params = useParams()
    const navigate = useNavigate()
    const [sliders, setSliders] = useState([]);
    const [titleSubCategorys, setTitleSubCategorys] = useState([])

    useEffect(() => {
      (async function () {    
        await getAllSlider().then(async (data) => {
          setSliders(data);
        });    
        await getOneCategoryItems(params.id).then(async (data) => {
          console.log(data);
          if (data?.length === 0){
            console.log('work');
            (navigate("/"))
          }else {
            setTitleSubCategorys(data)
          }
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
            {/* {
              titleSubCategorys.map((i)=>
                <ProductSubCategory key={i.id} titleSubCategory={i}/>
              )
            } */}
            <ProductSubCategory titleSubCategory={titleSubCategorys[0]}/>
            <ProductSubCategory titleSubCategory={titleSubCategorys[1]}/>
            <Slider slider={(sliders.filter(i=> i.number === 7))[0]}/>
            {titleSubCategorys.map((i, index)=>
              (index > 1 && <ProductSubCategory key={index} titleSubCategory={i}/>)
            )}
            <Slider my={0} slider={(sliders.filter(i=> i.number === 8))[0]}/>
            <Slider my={0} slider={(sliders.filter(i=> i.number === 9))[0]}/>
            <Slider my={0} slider={(sliders.filter(i=> i.number === 10))[0]}/>
        </div>
    );
});

export default Category;