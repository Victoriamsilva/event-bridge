exports.createVehicle = async (req, res) => {
    const vehicle = req.body.vehicle;
    try {
            if (vehicle) {
            const vehicleCreated = await axios.post('http://localhost:3100/vehicles', {
                    ...vehicle
            });
            if (req.body.createHistory && vehicleCreated) {
                const historyCreated = await axios.post('http://localhost:3100/history', {
                    vehicleId: vehicleCreated.data.id,
                });
                res.status(200).send({ vehicleCreated, historyCreated })
            }
            res.status(200).send({ vehicleCreated })
        }
        } catch (error) {
            res.status(400).send({ message: "Erro ao criar veículo" })
        }
    }
    
exports.updateHistory = async (req, res) => {
    const history = req.body.history;
    try {
            if (history) {
            const historyUpdated = await axios.put('http://localhost:3100/history', {
                ...history
            });
            res.status(200).send({ historyUpdated })
        }
        res.status(400).send({ message: "Histórico não encontrado" })
        } catch (error) {
            res.status(400).send({ message: "Erro ao atualizar histórico" })
        }
}