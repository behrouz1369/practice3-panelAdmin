import { useContext, useEffect, useState } from "react"
import ArticleContext from "../contexts/ArticleContext"
import axios from "axios"
import useAxiosCRUD from "../../hooks/useAxios"


export default function ModalArticle() {
    const{modalIsShow , setModalIsShow , articleDispacher} =useContext(ArticleContext)

    const[inputText , setInputText] = useState('')

    const { data, loading, error, postData, putData, deleteData } = useAxiosCRUD(`https://661924cf9a41b1b3dfbf00bb.mockapi.io/articles`);

    if(error){
        toast.error(`You are in trouble! message error : ${error.message}`);
    }

    const addArticle = async(title) => {
        postData({title:title})

        articleDispacher({
            type:'addArticle',
            title:title
        })
    }

    let submitAddHandler = (e) => {
        e.preventDefault()

        if(inputText !== null && inputText !== ''){
            addArticle(inputText)
            setInputText('')
            setModalIsShow(false)

        }
    }

    return(
        <>
             {/* Popupmenu For Create And Edit Article */}
             <div id="my-modal" className={`fixed top-0 left-0 ${modalIsShow ? 'flex' : 'hidden'} justify-center items-center w-full h-full bg-[rgba(0,0,0,.5)] z-20 transition-all duration-500`}>
                <article className="flex flex-col w-1/3 bg-white rounded overflow-hidden">
                    {/* <!-- Header --> */}
                    <div className="flex justify-center px-3 py-5 mb-5 bg-blue-450">
                        <h2 className="text-lg text-white font-semibold">Create Article</h2>
                    </div>
                    {/* <!-- Content --> */}
                    <form onSubmit={submitAddHandler}>
                        <div className="flex flex-col w-full px-3">
                            <input type="text" placeholder="Enter Text Title ..."
                                className="text-sm text-gray-800 border-2 rounded w-full p-3"
                                onChange={(e)=>setInputText(e.target.value.trim())}

                                value={inputText}
                            />
                            <p className="text-[13px] text-red-500 ml-auto">{(inputText === '') ? 'Enter Text To Input':''}</p>
                        </div>
                        <div className="flex justify-end gap-3 py-5 px-3 mt-5 border-t-2">
                            <button onClick={()=>setModalIsShow(false)} id="my-modal-close-button" className="flex justify-center items-center bg-orange-450 text-white text-sm font-semibold rounded py-2 px-8 hover:bg-orange-550 transition-all">Close</button>
                            <button type="submit" className="flex justify-center items-center bg-blue-450 text-white text-sm font-semibold rounded py-2 px-8 hover:bg-blue-550 transition-all">{loading ? 'loading...':'Create Article'}</button>
                        </div>
                    </form>

                </article>
            </div>
        </>
    )
}
