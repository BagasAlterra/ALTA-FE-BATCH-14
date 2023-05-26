import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../../components/Card'

const News = () => {

    const [data, setData] = useState<Array<string | number>>([])

    const fetchNews = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=027a0c86b59d4edaa9c304428b94a784`)
            .then((response) => {
                setData(response.data.articles)
                console.log(response.data.articles)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchNews()
    }, [])


    // // Efek componentDidMount
    // useEffect(() => {
    //     console.log("component did mount")

    //     //     // Efek componentWillUnmount
    //     return () => {
    //         console.log("component will unmount")
    //     }
    //     // lakukan operasi yang diperlukan ketika nilai count berubah
    //     // misalkan : perbarui tampilan, panggil API dengan parameter baru, dll
    // }, [data])

    // //Efek componentDidUpdate
    // useEffect(() => {
    //     console.log("component updated")
    // })

    return (
        <div className='w-screen bg-white'>
            <div className='grid gap-y-5'>
                {
                    data.map((item: any) => {
                        return (
                            <Card
                                id='news'
                                title={item.title}
                                description={item.description}
                                image={item.urlToImage}
                            />
                        )

                    })
                }
            </div>
        </div>
    )
}

export default News