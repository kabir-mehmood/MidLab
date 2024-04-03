import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

async function getBooks() {
    try {
      const response = await fetch('https://dev.iqrakitab.net/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error; // Re-throw the error to handle it at the calling site
    }
  }
  


const styles = StyleSheet.create({})