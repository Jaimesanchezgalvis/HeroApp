import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHerosByName } from '../../selectors/getHerosByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);


    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues

    const heroesFiltered = useMemo(() => getHerosByName(q), [q])

    const hadleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen </h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={hadleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 col-12 btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '')
                        && <div className="alert alert-info">
                            search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0 )
                        && <div className="alert alert-danger">
                            there is no a hero with: <b>{q}</b>
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                    <hr />

                </div>
            </div>
        </div>
    )
}