import { useEffect, useReducer, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ArticleList from "./ArticleList";
import articleReducer from "../../reducers/articleReducer";
import ModalArticle from "../modal-article/ModalArticle";
import ArticleContext from "../contexts/ArticleContext";
import FormModal from "../modal-article/FormModal";

import axios from 'axios';
import useAxios from "../../hooks/useAxios";
import useAxiosCRUD from "../../hooks/useAxios";

import { toast } from "react-toastify";


export default function Articles() {
    const [modalIsShow , setModalIsShow] = useState(false)

    const [articles , articleDispacher] = useReducer(articleReducer,[])

    const { data, loading, error, postData, putData, deleteData } = useAxiosCRUD(`https://661924cf9a41b1b3dfbf00bb.mockapi.io/articles`);

    if(error){
        toast.error(`You are in trouble! message error : ${error.message}`);
    }


    useEffect(()=>{
        if(data){
            articleDispacher({
                type:'listArticle',
                articles:data
            })
        } else if(error){
            toast.error('You are in trouble!');
        }
    },[data,error])


    return (
        <>
        <ArticleContext.Provider value={{
            articleDispacher,
            articles,
            modalIsShow,
            setModalIsShow
        }}>

            <ModalArticle />


             {/* <!-- Table Articles --> */}
             <section className="flex flex-col justify-start gap-5 py-16">

                {
                    ! loading ? (
                        <ArticleList />
                    )
                    : (
                        <div className="flex justify-center items-center w-full h-full text-3xl text-gray-700 font-bold">
                            Loading ...
                        </div>
                    )
                }




             {/* <!-- Button Create Article --> */}
            <div className="flex justify-end">
                <button onClick={()=> setModalIsShow(true)} className="flex justify-center items-center text-sm font-semibold bg-blue-450 text-white w-[150px] py-2 rounded hover:bg-blue-550">Create Article</button>
            </div>

            </section>

        </ArticleContext.Provider>
        </>
    )
}
