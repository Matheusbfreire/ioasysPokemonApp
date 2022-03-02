import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pokes } from 'react-native';

import api from '../../services/api';

export function Home() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
      async function fetchPokemons() {
          try {
              const response = await api.get('/pokemon?limit=12');
              setPokemons(response.data.results);
          } catch (error) {
              console.log(error)
          } 
      }

      fetchPokemons();
  }, []);

  return (
    <View>
      <View style={{backgroundColor: "#EC0344", width: '100%', height: 17}}></View>
      <View style={styles.container}>
        <Image source={require('../../../assets/Vector.png')} style={styles.imagem}/>
        <Text style={styles.texto}>ioasys pokédex</Text>


      </View>
      <View style={styles.coreima}>
        <View>
          <Text style={styles.texto2} > Buscar</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.texto3} placeholder='Buscar pokemon'></TextInput>
            <Image style={{marginTop: 11}} source={require('../../../assets/Lupa.png')}></Image>
          </View>
        </View>
        <View style={styles.coreima1}>
          <Image source={require('../../../assets/core.png')}></Image>
        </View>
      </View>
      <View></View>
       <FlatList
     
        data={pokemons}
        keyExtractor={item => item.id}
        numColumns={3}
        marginLeft={21}
     
        renderItem={({item}) => (
          <View style={styles.pokemonWrapper}>
                <Text>{item.name}</Text>
                <View style={styles.imagepokes}>
                <Image source={require('../../../assets/bulbasaur.png')}  ></Image> 
                </View>
              </View>
          
          
   
          
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 40,
    marginLeft: 50,
  },
  texto: {
    color: "#EC0344",
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagem: {
    marginTop: 13,
    marginRight: 9,
  },
  texto2: {
    color: '#EC0344',
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 83,
    fontSize: 16,
  },
  texto3: {
    marginTop: 6,
    marginLeft: 87,
    marginRight: 80,
  },
  coreima: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    
  },
  coreima1: {
    marginTop: 92,
    marginLeft: 50
  },
  pokemonWrapper: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#74CB48',
    borderRadius: 8,

    width: 104,
    height: 102,
    margin: 10
  },
  imagepokes: {
    marginLeft: 15
  }
 
});
