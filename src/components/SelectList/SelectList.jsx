import React from 'react'
import 'antd/dist/antd.css'
import { Select } from 'antd'
import { Button } from 'antd'
import './SelectList.scss'

const { Option } = Select

export const SelectList = ({ sel, setSel, list, placeholder, actSelect, setModal }) =>{
    const apply = () =>{
        actSelect(sel)
        setModal(false)
        console.log(sel)
    }

    return(
        <>
            <Select
                value={sel}
                showSearch
                placeholder={placeholder}
                optionFilterProp='children'
                onChange={(value) => setSel(value)}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {list.map(inner=>(
                    <Option onClick={() => setSel(inner.name)} key={inner.id} value={inner.name}>{inner.name}</Option>
                ))}
            </Select>
            <div className='select__button-group'>
                <Button className='select__button' onClick={apply} type='primary'>To apply</Button>
                <Button className='select__button' onClick={() => setModal(false)}>Cancel</Button>
            </div>
        </>
    )
}