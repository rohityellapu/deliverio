import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView>


            {/* Header */ }
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-3 py-2">
                <Image
                    source={ {
                        uri: "https://media.istockphoto.com/id/1250495017/vector/courier-rides-a-bicycle-on-a-city.jpg?s=612x612&w=0&k=20&c=PAulV7kSoz91X-p1Hm0v_fTNSxtSLJIiLVSFa8r-mqI=",
                    } }
                    className='h-9 w-9 bg-gray-300 p-2 rounded-full'
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={ 20 } color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={ 35 } color="#00CCBB" />

            </View>
            {/* Search */ }
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="#00CCBB" />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        placeholderTextColor="gray"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

