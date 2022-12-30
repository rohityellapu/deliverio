import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurant';
import { selectBasketItems } from '../features/basket';
import { SafeAreaView } from 'react-native';
import SafeViewAndroid from "../components/SafeViewAndroid";
import { XCircleIcon } from 'react-native-heroicons/solid';
const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch();
    const [itemsInBasket, setitemsInBasket] = useState([])

    useMemo(() => {
        const groupedItems = items.reduce((res, item) => {
            (res[item.id] = res[item.id] || []).push(item);
            return res;
        }, {})
        setitemsInBasket(groupedItems)
    }, [items])

    return (
        <SafeAreaView style={ SafeViewAndroid.AndroidSafeArea } className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{ restaurant.title }</Text>
                    </View>
                    <TouchableOpacity onPress={ navigation.goBack } className="rounded-full bg-gray-100 absolute top-3 right-5">
                        <XCircleIcon color="#00CCBB" height={ 50 } width={ 50 } />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen