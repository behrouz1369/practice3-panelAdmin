// import useTimestampToDate from "../../hooks/useTimestampToDate"

import { useContext, useEffect, useState } from "react"
import useTimestampToDate from "../../hooks/useTimestampToDate"
import IconDelete from "../icons/IconDelete"
import ModalArticle from "../modal-article/ModalArticle"
import IconEdit from "../icons/IconEdit"
import ArticleContext from "../contexts/ArticleContext"
import axios from "axios"
import useAxiosCRUD from "../../hooks/useAxios"

import Swal from "sweetalert2";
import { toast } from "react-toastify"







export default function ArticleListItem({article ,isOpen ,setIsOpen ,articleSub}) {
    const {articleDispacher} = useContext(ArticleContext)
    const { date , time } = useTimestampToDate(article.createdAt)

    const { data, loading, error, postData, putData, deleteData } = useAxiosCRUD(`https://661924cf9a41b1b3dfbf00bb.mockapi.io/articles`);

    if(error){
        toast.error(`You are in trouble! message error : ${error.message}`);
    }

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
      setIsEditing(true);
    };

    const handleCloseModal = () => {
      setIsEditing(false);
    };

    const handleFormSubmit = (text, id) => {
      handleEdit(text, id);
      setIsEditing(false);
    };


    const deleteArticle = async(articleItem) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              )

                deleteData(articleItem.id)

                articleDispacher({
                    type:'deleteArticle',
                    id:articleItem.id
                })
            }
          })
    }

useEffect(()=>{

},[])



    return(
        <>
            <tr className="hover:bg-gray-50" >
                <td className="px-6 py-4">{article.title}</td>
                <td className="articleDate px-6 py-4">{date.toLocaleDateString()}</td>
                <td className="px-6 py-4">
                    <div className="flex justify-end gap-4">
                        <IconDelete onClick={()=> deleteArticle(article)} />
                        <IconEdit onClick={()=>{
                            setIsOpen(true)
                            articleSub(article)
                        }} />
                    </div>
                </td>
            </tr>
        </>
    )
}
