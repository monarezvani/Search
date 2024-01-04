import React from 'react'
import "./reposityList.scss";
import UserModel from '../../../models/UserModel';
import Repository from '../../../models/RepositoryModel';
import StarImg from '../../../assets/star.svg';

interface IRepositoryListProps {
    user: UserModel;
    repository: Repository
}
export const RepositoryList = ({ user, repository }: IRepositoryListProps) => {

    return (
        <>
            <div className="repository-container">
                <div className="repositoy-detail">
                    <span className="repository-title">{repository.name}</span>
                    <span>
                        <span className="repository-stars">{repository.stargazers_count}</span>
                        <img src={StarImg} alt="Star" />
                    </span>
                </div>
                <div className="repository-description">
                    <p>{repository.description}</p>

                </div>

            </div>

        </>
    )
}
