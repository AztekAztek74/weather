import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Select } from 'antd'
import { Button } from 'antd'

const { Option } = Select

export const SelectList = ({ list, placeholder, actSelect, setModal }) =>{
    const [sel, setSel] = useState()
    const apply = () =>{
        actSelect(sel)
        setModal(false)
        console.log(sel)
    }

    return(
        <>
            <Select
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
            <Button onClick={apply} type='primary'>To apply</Button>
            <Button onClick={() => setModal(false)}>Cancel</Button>
        </>
    )
}