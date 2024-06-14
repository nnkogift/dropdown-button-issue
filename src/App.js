import React, {useState} from 'react'
import {DataQuery} from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import {DropdownButton, InputField} from "@dhis2/ui";

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => {
    const [value, setValue] = useState()

    return (

        <div className={classes.container}>
            <DataQuery query={query}>
                {({error, loading, data}) => {
                    if (error) return <span>ERROR</span>
                    if (loading) return <span>...</span>
                    return (
                        <>
                            <h1>
                                {i18n.t('Hello {{name}}', {name: data.me.name})}
                            </h1>
                            <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 16
                            }}>
                                <DropdownButton>
                                    Dropdown
                                </DropdownButton>
                                <InputField value={value} onChange={({value}) => setValue(value)}/>
                            </div>
                        </>
                    )
                }}
            </DataQuery>
        </div>
    )
}

export default MyApp
