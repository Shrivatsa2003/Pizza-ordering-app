import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { supabase } from '@/lib/supabase'

const signout = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title='sign-out' onPress={async ()=> await supabase.auth.signOut()}/>
    </View>
  )
}

export default signout