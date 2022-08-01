import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, FlatList } from "react-native";

import { RANKING } from "../../Configuration/api/data";
import { AVATAR_DEFAULT_WIDTH } from "../../Styling/Avatar";
import RankingItem from "../Cards/Ranking/RankingItem";
import BottomModal from "../Modals/BottomModal";
import TopUsers from "../Ranking/TopUsers";
import GamerProfileQuickView from "../Shared/GamerProfileQuickView";

export default function RankingList({ onShowUserProfile }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (selectedUser) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [selectedUser]);

  const onClickUser = (user) => {
    try {
      setSelectedUser(user);
    } catch (error) {}
  };

  const renderList = useCallback(
    ({ item }) => (
      <RankingItem key={item.key} data={item} onClick={onClickUser} />
    ),
    [RANKING]
  );

  const keyExtractor = useCallback((item) => item.key, []);

  const getItemLayout = (data, index = 0) => ({
    length: AVATAR_DEFAULT_WIDTH,
    offset: AVATAR_DEFAULT_WIDTH * index,
    index,
  });

  return (
    <>
      <FlatList
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        data={RANKING.slice(3, RANKING.length)}
        renderItem={renderList}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        ListHeaderComponent={
          <TopUsers
            data={RANKING.slice(0, 3)}
            onClickItem={(data) => setSelectedUser(data)}
          />
        }
      />
      <BottomModal
        showModal={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedUser(null);
        }}
        // backgroundColor={APP_COLORS.BLACK_LIGHT_COLOR.color}
        content={
          <GamerProfileQuickView
            gamer={selectedUser}
            onShowUserProfile={(user) => {
              setSelectedUser(null);
              setOpenModal(false);
              onShowUserProfile(user);
            }}
          />
        }
        minHeight={Math.ceil(Dimensions.get("window").height / 1.5)}
      />
    </>
  );
}
