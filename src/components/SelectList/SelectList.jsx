import React from 'react'
import 'antd/dist/antd.css'
import { Select } from 'antd'
import { Button } from 'antd'
import './SelectList.scss'
import PropTypes from 'prop-types'

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

SelectList.propTypes = {
    sel: PropTypes.string,
    setSel: PropTypes.func,
    list: PropTypes.arrayOf(PropTypes.object),
    placeholder: PropTypes.string,
    actSelect: PropTypes.func,
    setModal: PropTypes.func
}

SelectList.defaultProps = {
    sel: '',
    setSel: () => {},
    list: [],
    placeholder: '',
    actSelect: () => {},
    setModal: () => {}
}