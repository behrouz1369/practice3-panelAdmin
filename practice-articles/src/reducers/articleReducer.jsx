import { v4 as uuidv4 } from 'uuid';

export default function articleReducer(articles , action) {
    switch (action.type) {
        case 'listArticle':
            return action?.articles
        case 'addArticle':
            return [
                ...articles,
                {
                    title:action?.title,
                    createdAt:Date.now()
                }
            ]
        case 'deleteArticle':
            return  articles.filter(item => item.id !== action.id);

        case 'editArticle':
            return articles.map((articleItem)=> {
                if(articleItem.id === action.id){
                    articleItem.title = action?.title
                }
                return articleItem
            })

        default:
            return articles
    }
}
