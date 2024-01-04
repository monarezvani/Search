import axios from 'axios'
import React from 'react'
import User from '../../models/UserModel'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (searchUser: string) => {
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${searchUser}`);
        let users = await response.data.items as User[];
        return users.slice(0, 5);
    } catch (error) {
        throw Error('Error fetching users');
    }
});
