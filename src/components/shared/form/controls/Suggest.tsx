import React, { useState } from 'react'
import { Dropdown, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import FormControl from '../FormControl'
import uniqid from 'uniqid'

interface Iprops {
    data: { [key: string]: any }[];
    text: string;
    value: string;
    name: string;
    placeholder?: string;
    label?: string;
    onSelect: (object:any) => void;
}
export default function Suggest(props: Iprops) {
    const { data, text, value, name, placeholder, label, onSelect } = props;
    // const data = [
    //     { id: 1, name: "John", age: 30 },
    //     { id: 2, name: "Jane", age: 25 },
    //     { id: 3, name: "Bob", age: 40 },
    //     { id: 4, name: "Alice", age: 22 }
    // ];
    // const text = 'name', value = 'age'
    const [selectedValue, setSelectedValue] = useState('');
    const [filteredData, setFilteredData] = useState<Array<any>>(data);
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onChange = (Tvalue: string) => {
        setShowDropDown(true);
        setSelectedValue(Tvalue)
        const filtered = data?.filter((d: any) => {
            const Lowertext = d[text].toLowerCase();
            if (Lowertext?.startsWith(Tvalue.toLowerCase())) { return d }
        })
        setFilteredData(filtered)
    }

    const customToggle = (nextShow: boolean, meta: { source: string | undefined, originalEvent?: React.SyntheticEvent | KeyboardEvent | MouseEvent }) => {
        if (meta.source === 'click' && nextShow) {
            setShowDropDown(true);
        }
        else {
            if (data.filter((d: any) => d[text] === selectedValue).length === 0) {
                setSelectedValue('');
                setFilteredData(data);
            }
            setShowDropDown(false);
        }
    };

    const itemClick = (fd: any) => {
        setSelectedValue(fd[text])
        setShowDropDown(false)
    }
    return (
        <Dropdown show={showDropDown} onToggle={customToggle}>
            <FormControl label={label} placeholder={placeholder ? placeholder : "Type to search"} name={props.name} isAutoComplete onChange={onChange} value={selectedValue} />
            <Dropdown.Menu className='w-100 p-0' style={{ maxHeight: "250px", overflowY: "auto" }}>
                <>  {filteredData?.length > 0 ? <ListGroup className='suggest-list'>{filteredData.map((fd: any) => <ListGroup.Item key={uniqid()} onClick={() => { itemClick(fd); onSelect(fd) }}>{fd[text]}</ListGroup.Item>)}</ListGroup>
                    : <>No Matching Records</>}
                </>
            </Dropdown.Menu>
        </Dropdown >
    )
}
 

