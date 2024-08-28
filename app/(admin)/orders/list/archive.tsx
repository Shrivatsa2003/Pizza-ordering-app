import { Text,FlatList } from 'react-native'; 
import orders from '@/assets/Food Ordering Asset bundle/data/orders';
import OrderListItem from '@/components/OrderItemList';
import { useAdminOrderList } from '@/api/orders';
import { ActivityIndicator } from 'react-native';
export default function OrdersScreen(){
    const{data:orders,isLoading,error} = useAdminOrderList({archived:true})
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