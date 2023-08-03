import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../button/Button';
import Form from '../form/Form';

function Zoo() {
  const [animalsAreStale, setAnimalsAreStale] = useState(true);
  const [animals, setAnimals] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    (async () => {
      if (animalsAreStale) {
        setAnimalsAreStale(false);
        const { data: animals } = await axios.get('/api/animals/list');
        setAnimals(animals);
      }
    })();
    return () => {};
  }, [animalsAreStale]);

  return (
    <div>
      <h1>Your zoo</h1>
      {animals.length === 0 ? (
        <p>Add your first animal!</p>
      ) : (
        <p>Your animals:</p>
      )}
      {animals.length > 0 &&
        animals.map((animal) => {
          return (
            <div key={animal._id}>
              <p>
                Name: <span>{animal.name}</span>
              </p>
              <p>
                Type: <span>{animal.type}</span>
              </p>
            </div>
          );
        })}

      <Button text={'Add'} onClick={() => setShowAddForm(true)} />
      {showAddForm && (
        <Form
          setShowAddForm={setShowAddForm}
          setAnimalsAreStale={setAnimalsAreStale}
        />
      )}
    </div>
  );
}

export default Zoo;
