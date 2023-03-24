import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Header, ListItem, H3, P, Button } from './style'

function Home(){
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        async function apiPosts() {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => setPosts(data))
        } 

        apiPosts()
    }, [posts])

    return (
        <Container>
            <Header>

            <h1>Blog</h1>
            </Header>

            <ul>
                {
                    posts.map((post) => (
                        <ListItem key={post.id}>
                            <H3>{post.title}</H3>
                            <P>{post.body}</P>
                            <Link to={`/comentarios/${post.id}`}>
                                <Button>Ver mais</Button>
                            </Link>
                        </ListItem>
                    ))
                }
            </ul>
        </Container>
    )
}

export default Home