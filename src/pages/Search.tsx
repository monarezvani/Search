import React, { useState } from 'react'
import SearchButton from '../components/ui/searchButton/SearchButton'
import { useAppDispatch, useAppSelector } from '../features/reduxHook';
import { selectUser, selectUserLoadingState, usersData } from '../features/users/userSlice';
import { repositoriesData, selectRepoLoadingState } from '../features/respositories/repoSlice';
import './search.scss'
import CollapsibleBar from '../components/ui/collapsibleBar/collapsibleBar';
import { RepositoryList } from '../components/ui/repositoryList/RepositoryList';
import { fetchRepositories } from '../features/respositories/fetchRepositories';
import UserModel from '../models/UserModel';
import { selectCollapsedUsers, toggleCollapse } from '../features/respositories/collapseSlide';
import { LoadingSpinner } from '../components/ui/loadingspinner/LoadingSpinner';
import { fetchUsers } from '../features/users/fetchUsers';
import SearchBar from '../components/ui/searchBar/SearchBar';


export const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [currentSearch, setCurrentSearch] = useState<string>(''); // Added state for the current search term

    const users = useAppSelector(usersData);
    const repositories = useAppSelector(repositoriesData);
    const userLoading = useAppSelector(selectUserLoadingState)
    const repoLoading = useAppSelector(selectRepoLoadingState);
    const collapsedUsers = useAppSelector(selectCollapsedUsers);

    const dispatch = useAppDispatch()
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const handleUserClick = (selectedUser: UserModel) => {
        dispatch(selectUser(selectedUser));
        dispatch(fetchRepositories(selectedUser.login));
        dispatch(toggleCollapse(selectedUser.login));
    };
    const handleSearchButtonClick = () => {

        dispatch(fetchUsers(searchTerm));
        setCurrentSearch(searchTerm);

    };

    return (
        <div className='search_container'>
            <SearchBar onSearch={onSearch} searchTerm={searchTerm} />
            <SearchButton searchTerm={searchTerm} onClick={handleSearchButtonClick} />
            {userLoading === 'loading' && <LoadingSpinner />}
            {repoLoading === 'loading' && <LoadingSpinner />}
            {users.length > 0 && <p className="item-heading">{`Showing users for '${currentSearch}'`}</p>}
            {users.length === 0 && <p className="item-heading">Nothing to show!</p>}
            {users.map((user) => {
                return (
                    <CollapsibleBar
                        user={user}
                        key={user.id}
                        handleUserClick={handleUserClick}
                        collapsedUsers={collapsedUsers}
                    >
                        <div className="repository">
                            {repositories
                                .filter((repo) => repo.owner.login === user.login)
                                .map((repository) => (
                                    <RepositoryList user={user} repository={repository} key={repository.id} />
                                ))}
                        </div>
                    </CollapsibleBar>
                );
            })}

        </div >
    )
}
