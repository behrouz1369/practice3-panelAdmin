import { useContext, useEffect, useRef, useState } from "react";
import ArticleListItem from "./articleListItem";
import ModalArticle from "../modal-article/ModalArticle";
import ArticleContext from "../contexts/ArticleContext";
import FormModal from "../modal-article/FormModal";


export default function ArticleList() {
    const{articles} = useContext(ArticleContext)
    const [isOpen , setIsOpen] = useState(false)
    const [articleData , setArticleData] = useState(null)

    const articleSub = (data) => {
        setArticleData(data)
    }




    return(
        <>
            <FormModal isOpen={isOpen} setIsOpen={setIsOpen} article={articleData} />

            <div className="overflow-x-hidden rounded-lg border border-gray-200 shadow-md">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Title</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Creation Date</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {
                            articles.map((article,index)=> <ArticleListItem key={index} article={article} articleSub={articleSub} isOpen={isOpen} setIsOpen={setIsOpen} />)
                        }
                    </tbody>
                </table>
            </div>


        </>
    )
}
