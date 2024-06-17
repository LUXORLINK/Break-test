import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import './Shop.scss'
import { getAllPhotos } from '../../api/create.api'

export const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getProducts = async () => {
        try {
            const data = await getAllPhotos();
            setGoods(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <section className="products">
            <div className="container grid grid__col-4">
                {goods?.slice(0, 20).map((shop) => (
                    <Card
                        key={shop.id}
                        src={shop.thumbnailUrl}
                        title={shop.title}
                    />
                ))}
            </div>
        </section>
    )
}

export default Shop
