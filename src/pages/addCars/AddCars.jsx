import React, { useState, useEffect } from 'react';

const RegisterCar = () => {
  const [formData, setFormData] = useState({
    marca: '',
    carro: '',
  });

  const [marcas, setMarcas] = useState([]);
  const [carros, setCarros] = useState([]);
  const [marcaNomeFormatado, setMarcaNomeFormatado] = useState(''); // Nome da marca em formato apropriado para a URL da API de logomarcas
  const [marcaLogoURL, setMarcaLogoURL] = useState(''); // URL da logomarca da marca selecionada


  useEffect(() => {
    // Busque a lista de marcas da API
    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then((response) => response.json())
      .then((data) => setMarcas(data))
      .catch((error) => console.error('Erro ao buscar marcas:', error));
  }, []);


  // Mapeamento de nomes de marcas entre a API da FIPE e a API de logomarcas
  const marcaMappings = {
    'vw - volkswagen': 'volkswagen',
    'gm - chevrolet': 'gm',
    // Adicione outras marcas aqui conforme necessário
  };

  useEffect(() => {
    if (marcaNomeFormatado) {
      // Inicialize uma variável para armazenar a marca mapeada (padrão para o valor original)
      let marcaMapeada = marcaNomeFormatado;
  
      // Percorra as chaves do dicionário e verifique se alguma delas é uma substring de marcaNomeFormatado
      for (const chave in marcaMappings) {
        if (marcaNomeFormatado.includes(chave)) {
          marcaMapeada = marcaMappings[chave];
          break; // Saia do loop quando encontrar uma correspondência
        }
      }
  
      // Montar a URL da logomarca usando a marca mapeada
      const logoURL = `https://apiplacas.com.br/logos/logosMarcas/${marcaMapeada}.png`;
      setMarcaLogoURL(logoURL);
    } else {
      setMarcaLogoURL(''); // Limpar a URL se não houver marca selecionada
    }
  }, [marcaNomeFormatado]);
  
  
  
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'marca') {
      // Quando a marca é selecionada, busque a lista de carros para essa marca
      const marcaSelecionada = marcas.find((marca) => marca.codigo === value);
      if (marcaSelecionada) {
        setMarcaNomeFormatado(marcaSelecionada.nome.toLowerCase()); // Formate o nome da marca
      } else {
        setMarcaNomeFormatado(''); // Limpe o nome da marca se não for encontrada
      }
      fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${value}/modelos`)
        .then((response) => response.json())
        .then((data) => setCarros(data.modelos))
        .catch((error) => console.error('Erro ao buscar carros:', error));
    }
  };

  return (
    <div className='register section__padding'>
      <div className="register-container">
        <h1>Register Car</h1>
        <form className='register-writeForm' autoComplete='off'>
          <div className="register-formGroup">
            <label>Marca</label>
            <select
              name="marca"
              value={formData.marca}
              onChange={handleInputChange}
            >
              <option value="">Selecione uma marca</option>
              {marcas.map((marca) => (
                <option key={marca.codigo} value={marca.codigo}>
                  {marca.nome}
                </option>
              ))}
            </select>
          <div className="register-formGroup">
            <label>Carro</label>
            <select
              name="carro"
              value={formData.carro}
              onChange={handleInputChange}
            >
              <option value="">Selecione um carro</option>
              {carros.map((carro) => (
                <option key={carro.codigo} value={carro.codigo}>
                  {carro.nome}
                </option>
              ))}
            </select>
          </div>
          </div>
          {marcaLogoURL && (
            <div className="marca-logo">
              <img src={marcaLogoURL} alt="Logomarca da marca" />
            </div>
          )}
          <div className="register-button">
            <button
              className='register-writeButton'
              type="button"
              
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCar;
