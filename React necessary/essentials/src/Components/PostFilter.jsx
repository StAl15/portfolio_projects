import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div style={{ marginBottom: 12 }}>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                label="Search..."
                // variant="outlined"
                sx={{mb:2}}
                type="search"
            />
            <MySelect
                
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Sort by"
                options={[
                    { value: 'title', name: 'by title' },
                    { value: 'body', name: 'by body' },
                ]}
            />
        </div>
    );
}

export default PostFilter;
