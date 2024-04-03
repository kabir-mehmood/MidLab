import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, View, Text, Switch, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import booksData from './assets/Books.json'; // Import your local JSON file

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBooks(booksData);
    setLoading(false);
  }, []);

  return { books, loading };
};

const App = () => {
  const { books, loading } = useBooks();
  const [rtl, setRtl] = useState(false);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View>
      <Switch
        onValueChange={() => setRtl(!rtl)}
        value={rtl}
      />
      <TextInput
        placeholder="Search by book name"
        onChangeText={text => setSearch(text)}
        defaultValue={search}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          <FlatList
            data={filteredBooks}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{rtl ? item.title : item.title}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default App;
