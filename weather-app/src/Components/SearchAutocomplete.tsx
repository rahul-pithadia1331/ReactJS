import GetCityNameSuggestion from './GetCityNameSuggetion';
import { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchAutoComplete = (props: {
    searchCityName: string | undefined;
    setSearchCityName: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
    const [citySuggestions, setCitySuggestions] = useState<any>();
    console.log(props.searchCityName);

    useEffect(() => {
        const getData = async () => {
            if(!props.searchCityName) return 
            const data = await GetCityNameSuggestion(
                props.searchCityName as string
            );
            setCitySuggestions(data);
            console.log('');
            console.log(data);
        };
        console.log('here......', citySuggestions);
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searchCityName]);

    return (
        <ReactSearchAutocomplete
            className='w-100'
            items={citySuggestions}
            resultStringKeyName='name'
            onSearch={(e) => props.setSearchCityName(e)}
            onSelect={(e) => {props.setSearchCityName(e as unknown as undefined); console.log('onselect....')}}
            inputSearchString={props.searchCityName as string}
            autoFocus={true}
            styling={{ zIndex: 4 }} // To display it on top of the search box below
        />
    );
};

export default SearchAutoComplete;
