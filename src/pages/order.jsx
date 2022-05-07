import React, {useEffect, useState} from "react";
import {db} from "../firebase_setup";
import {useStateValue} from "../components/StateProvider";
import CratCard from "../components/CratCard";


export default function Order() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue();

    useEffect(()=> {
        if(user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', "desc")
            .onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            });
            console.log(orders);
        }
        else {
            setOrders([]);
        }
    }, [user])

    return(
        <div>
            <h1>Your Orders</h1>
            <div>
                {
                    orders?.map(order => (
                        <div>
                            <p>{ order.id }</p>
                            <div>
                            {
                                order.data.basket?.map(item => (
                                    <CratCard item={item} show={false}/>
                                ))
                            }
                            </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}
