export const COMMENT_FRAGMENT= `fragment CommentParts on Comment{id text user{id username}}`

export const USER_FRAGMENT=`
    fragment UserParts on User{
        id
        username
    }
`

export const FILE_FRAGMENT=`
    fragment FileParts on File{
        id
        url
    }
`


export const FULL_POST_FRAGMENT=`
    fragment PostParts on Post{
        id
        caption
        location
        user{
            id
            username
        }
        files{
            id
            url
        }
        likes{
            id
            user{
                id
                username
            }
        }
        comments{
            id
            text
        }
        createdAt
        updatedAt
    }
`