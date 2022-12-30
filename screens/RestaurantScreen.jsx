import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurant';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { params: {
        id,
        title,
        rating,
        genre,
        imgUrl,
        address,
        description,
        dishes,
        long,
        lat,
        img
    } } = useRoute();

    useEffect(() => {
        dispatch(setRestaurant({
            id,
            title,
            rating,
            genre,
            imgUrl,
            address,
            description,
            dishes
        }))
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <>
            <BasketIcon/>
            <ScrollView>
                <View className='relative'>
                    <Image
                        source={ {
                            uri: imgUrl,
                        } }
                        className="w-full h-56 bg-gray-300 p-4"
                    />
                    <TouchableOpacity onPress={ navigation.goBack } className="absolute top-14 left-4 p-2 bg-gray-100 rounded-full">
                        <ArrowLeftIcon size={ 20 } color="#00CCBB" />
                    </TouchableOpacity>

                </View>
                <View className='bg-white'>
                    <View className='px-4 pt-4'>
                        <Text className='text-3xl font-bold'>{ title }</Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                                <StarIcon color="green" opacity={ 0.5 } size={ 22 } />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-green-500'>{ rating }</Text> . { genre }
                                </Text>
                            </View>
                            <View className='flex-row items-center space-x-1'>
                                <MapPinIcon color="gray" opacity={ 0.4 } size={ 22 } />
                                <Text className='text-xs text-gray-500'>
                                    Nearby . { address }
                                </Text>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-2 pb-4'>{ description }</Text>

                    </View>
                    <TouchableOpacity className='flex-row items-center p-3 space-x-2 border-y border-gray-300'>
                        <QuestionMarkCircleIcon color="#00CCBB" size={ 20 } opacity={ 0.7 } />
                        <Text className='pl-2 flex-1 text-md font-bold'>Have a food allergy?</Text>
                        <ChevronRightIcon color='#00CCBB' size={ 22 } />
                    </TouchableOpacity>
                </View>
                <View className="pb-36">
                    <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
                    {/* Dishes */ }
                    { dishes?.map(dish => (
                        <DishRow
                            key={ dish._id }
                            id={ dish._id }
                            name={ dish.name }
                            description={ dish.shortDescription }
                            price={ dish.price }
                            image={ dish.imageUrl }

                        />

                    )) }
                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen