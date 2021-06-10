import React, { Fragment, useState } from 'react';
import data from '../db/dummy.json';

export default function DataView(){

    console.log('data.days :' , data.days);
    const [newData, setNewData] = useState(data);
    return(
        <Fragment>
            <ul>
                {
                    data.days.map(item => (<li>Day : {item.id} {item.day}</li>))
                }
            </ul>

            <table>
                {
                    data.words.map(word => (
                        <td key = {word.id}>
                            <tr>{word.eng}</tr>
                            <tr>{word.kor}</tr>
                        </td>
                    ))
                }
            </table>
        </Fragment>
    );
}