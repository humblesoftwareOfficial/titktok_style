import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import DefaultAvatar from "../../../Components/Avatar/DefaultAvatar";
import BackButton from "../../../Components/Buttons/BackButton";
import CustomButton from "../../../Components/Buttons/CustomButton";
import BottomModal from "../../../Components/Modals/BottomModal";
import SectionTitle from "../../../Components/Title/SectionTitle";
import { SAFE_AREA_VIEW } from "../../../Styling/Main";
import { PROFILE_STYLE } from "../../../Styling/Profile";
import { APP_COLORS } from "../../../Styling/System";
import AccountReports from "./AccountReports";
import RecapInfos from "./RecapInfos";

const SIZE = Math.ceil(Dimensions.get("screen").width / 5);

export default function Profile({ navigation, route }) {
  const [openModal, setOpenModal] = useState(false);
  const { user } = route.params;
  const onGoBack = () => {
    try {
      navigation.goBack();
    } catch (error) {}
  };
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <View style={PROFILE_STYLE.header}>
        <View style={{ flex: 1 }}>
          <BackButton onClick={onGoBack} />
        </View>
        <View style={{ flex: 1 }}>
          <SectionTitle
            label={user?.identifiant}
            flexValue={0}
            color={APP_COLORS.LIGHT_COLOR.color}
            fontSize={14}
          />
        </View>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row-reverse" }}
          onPress={() => setOpenModal(true)}
        >
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color={APP_COLORS.LIGHT_COLOR.color}
          />
        </TouchableOpacity>
      </View>
      <View style={PROFILE_STYLE.top_container}>
        <DefaultAvatar
          url={user?.urlProfile}
          width={SIZE}
          borderWidth={0}
          borderColor={APP_COLORS.LIGHT_COLOR.color}
          borderRadius={SIZE}
        />
        <View style={{ flex: 1 }}>
          <RecapInfos titleContainerColor="#242424" />
        </View>
      </View>
      <View style={PROFILE_STYLE.about_container}>
        <Text style={PROFILE_STYLE.about_text}>
          {` Welcome to king's 👑 room...  watch, vote & commment.\nLet's have fun`}
        </Text>
      </View>
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <CustomButton
            label="Follow"
            textColor={APP_COLORS.SECONDARY_COLOR.color}
            bgColor="rgba(29, 236, 233, 0.1)"
            padding={10}
          />
        </View>
        {/* <CustomButton
          label="Voir le profil complet"
          bgColor="rgba(185, 27, 5, 0.1)"
          textColor={APP_COLORS.PRIMARY_COLOR.color}
        /> */}
      </View>
      <BottomModal
        showModal={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        animationType="fade"
        backgroundColor={APP_COLORS.BLACK_LIGHT_COLOR.color}
        content={<AccountReports/>}
        minHeight={Math.ceil(Dimensions.get("window").height / 1.3)}
        overlay="rgba(255,255,255,0.3)"
      />
    </SafeAreaView>
  );
}
