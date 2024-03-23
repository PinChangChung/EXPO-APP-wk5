import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Center, Box, Button, ButtonText, VStack, HStack } from "@gluestack-ui/themed";


import img0 from '../../src/img/img_book_fashinopolis.png';
import img1 from '../../src/img/img_book_chanel.png';
import img2 from '../../src/img/img_book_calligraphy.png';
import img3 from '../../src/img/img_book_ysl.png';
import img4 from '../../src/img/img_book_tbos.png';
import img5 from '../../src/img/img_book_stitchedup.png';

import Stars from '../components/Star'

const images = [img0, img1, img2, img3, img4, img5];

const DetailScreen = ({ route }) => {
  const {
    title,
    artist,
    key,
    star,
    descriptions
  } = route.params;
  return (
    <Center backgroundColor='#fff' >
      <VStack>
        <Center pt={50} pb={20}>
          <Image
            style={{ width: 210, height: 300 }}
            source={images[key]}
          />
        </Center>

        <Box pt={10} pb={10}>
          <Center>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
            <HStack style={styles.star}>
              <Stars count={star} />
              <Text style={styles.rate}>{`${star}`}.0/5.0</Text>
            </HStack>
          </Center>
        </Box>
        <Center>
          <Text style={styles.descriptions}>{descriptions}</Text>
        </Center>

        <Center paddingBottom={200}>
          <Button
            width={200}
            bgColor='#6200EE'
            onPress={() => null}
          >
            <ButtonText>
              BUY NOW FOR $46.99
            </ButtonText>
          </Button>
        </Center>

      </VStack>
    </Center>

  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 2
  },
  artist: {
    fontFamily: "Roboto",
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10
  },
  rate: {
    paddingLeft: 10
  },
  star: {
    marginTop: 1,
    paddingBottom: 10
  },
  descriptions: {
    width: 320,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 24,
    paddingBottom: 30
  },
  buy_content: {
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 16,
    paddingBottom: 30,
    fontWeight: 500
  }
})

export default DetailScreen;
