import React from 'react';
import { Text,FlatList, ActivityIndicator } from 'react-native'; 

import OrderListItem from '@/components/OrderItemList';
import { useAdminOrderList } from '@/api/orders';
import { useInsertOrderSubscription } from '@/api/orders/subscripton';




export default function OrdersScreen(){
    const{data:orders,isLoading,error} = useAdminOrderList({archived:false})
    useInsertOrderSubscription()

    if(isLoading){
        return<ActivityIndicator/>
    }


    if(error){
        return <Text>unable to fetch</Text>
    }


    return(
        <FlatList data={orders}
        renderItem ={({item})=><OrderListItem order={item}/>}
        contentContainerStyle={{gap:10,padding:10}}
        />
    )
    
}