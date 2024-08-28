import { useOrderDetails } from "@/api/orders";

import OrderListItem from "@/components/OrderItemList";
import OrderItemListItem from "@/components/OrderItemListItem";
import { View } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Text,StyleSheet, ActivityIndicator } from "react-native";

export default function OrderDetailsScreen(){
    const {id:idString} = useLocalSearchParams()
    const id = parseFloat(typeof idString==='string'? idString:idString[0])
  
    const{data:order,isLoading,error}=useOrderDetails(id)
   
    if(isLoading){
        return<ActivityIndicator/>
    }
    if(error){
        return<Text>failed to fetch</Text>
    }
    
    return (
        <View style={{padding:10,gap:20,flex:1}}>
            <Stack.Screen options={{title:`Order ${id}`}}/>
            
            <FlatList 
            data = {order.order_items} 
            renderItem={({item})=><OrderItemListItem item = {item} />}
            contentContainerStyle={{ gap: 10 }}
            ListHeaderComponent={<OrderListItem order ={order}/>}
            />
        </View>
    )
    
      
}
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor:'gainsboro',
//       padding: 10,
//       flex: 1,
//       gap: 20,
//     },
//   });