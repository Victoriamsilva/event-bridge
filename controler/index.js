const axios = require('axios');

exports.createVehicle = async (req, res) => {
    const vehicle = req.body.vehicle;
    try {
        if (vehicle) {
            const vehicleCreated = await axios.post('http://localhost:3200/vehicles', vehicle);
            if (req.body.createHistory && vehicleCreated) {
                const historyCreated = await axios.post('http://localhost:3300/history', {
                    vehicle: {
                        id: vehicleCreated.data.id
                    },
                    client: {
                        id: vehicleCreated.data.client.id
                    }
                });
                res.status(200).send({ vehicle: vehicleCreated.data, history: historyCreated.data })
            } else {
                res.status(200).send({ vehicle: vehicleCreated.data })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: "Erro ao criar veículo" })
    }
}

exports.createClient = async (req, res) => {
    const client = req.body.client;
    try {
        if (client) {
            const clientCreated = await axios.post('http://localhost:3200/clients', client);
            if (req.body.vehicle && clientCreated) {
                const vehicleCreated = await axios.post('http://localhost:3200/vehicles', {
                    ...req.body.vehicle,
                    client: {
                        id: clientCreated.data.id
                    }
                });
                if (req.body.createHistory && vehicleCreated) {
                    const historyCreated = await axios.post('http://localhost:3300/history', {
                        vehicle: {
                            id: vehicleCreated.data.id
                        },
                        client: {
                            id: clientCreated.data.id
                        }
                    });
                    res.status(200).send({ client: clientCreated.data, vehicle: vehicleCreated.data, history: historyCreated.data })
                } else {
                    res.status(200).send({ client: clientCreated.data, vehicle: vehicleCreated.data })
                }
            } else {
                res.status(200).send({ client: clientCreated.data })
            }
            
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: "Erro ao criar cliente" })
    }
}