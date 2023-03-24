import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Header, Content, ListItem, Name, Paragraph, Email } from './style'

function Comments(){
    const {id} = useParams()
    const [comments, setComments] = useState([])
    const [post, setPost] = useState({})

    // Carrega o post
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const post = {
                    id,
                    title: data.title,
                    body: data.body
                }

                setPost(post)
            })
    }, [id])

    // Carrega os comentarios do post
    useEffect(() => {
        async function loadComments(){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(data => setComments(data))
        }

        loadComments()
    }, [id])

    return (
        <Container>
            <Header>
                <h2>Post</h2>
            </Header>

            <Content>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </Content>

            

            <ul>
                <h3>Comentários:</h3>
                {
                    comments.map((comment) => (
                        <ListItem key={comment.id}>
                            <Name>{comment.name}</Name>
                            <Paragraph>{comment.body}</Paragraph>
                            <Email>{comment.email}</Email>
                        </ListItem>
                        
                    ))
                }
            </ul> 
        </Container>
    )
}

export default Comments