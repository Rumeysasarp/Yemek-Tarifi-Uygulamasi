import {View,Text, StatusBar, ScrollView, SafeAreaView} from "react-native";
import React from "react";
import {
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default function HomeScreen(){
    return(
        <View className="flex-1 bg-white ">
            <StatusBar style="dark"></StatusBar>
            <SafeAreaView>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom:50,
            }}   
                className="space-y-6 pt-14" 
                >
                {/*Avatar and Bell Icon*/}
                <View className="mx-4 flex-row justify-between items-center"></View>
                  <AdjustmentsHorizontalIcon size={hp(4)} color={"gray"} />
                  <Image>
                    source={require("../../assets/images/avatar.png")}
                    style={{
                        width:hp(5),
                        height:hp(5),
                        resizeMode:"contain"
                    }}
                    className="rounded-full"
                  </Image>
                  
            </ScrollView>
            </SafeAreaView>              
            <Text>HomeScreen</Text>
        </View>
    );
}