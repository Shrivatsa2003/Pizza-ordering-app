import { View,FlatList,Text} from 'react-native';

import products from '@/assets/Food Ordering Asset bundle/data/products';
import ProductListItem from '@/components/ProductListItem';
import { Stack } from 'expo-router';
import { useProductList } from '@/api/products';
export default function MenuScreen() {
  const {data:products,error,isLoading }= useProductList()
  if(isLoading){
    return <Text>Loding...</Text>
  }
  if(error){
    return <Text>failed to fetch products</Text>
  }
  return (
    <View>
      <Stack.Screen options ={{title:'Menu',
      headerTitleAlign: 'left'}}
      />
      <FlatList 
        data={products}
        renderItem={({item})=> <ProductListItem product={item}/>}
        numColumns={2}
        contentContainerStyle={{gap:10 ,padding:10}}
        columnWrapperStyle={{gap:10}}
      />
    </View>
    
  );
}


