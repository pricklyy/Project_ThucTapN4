import React, { createContext, useState } from 'react';

const NhiemVuContext = createContext();

const NhiemVuProvider = ({ children }) => {
  const [nhiemVu, setNhiemVu] = useState(null);
  const [nhiemVuHoanThanh, setNhiemVuHoanThanh] = useState([]);

  const nhanNhiemVu = (item) => {
    setNhiemVu(item);
  };

  const xoaNhiemVu = () => {
    setNhiemVu(null);
  };

  const luuNhiemVuHoanThanh = (item) => {
    setNhiemVuHoanThanh((prevNhiemVuHoanThanh) => [...prevNhiemVuHoanThanh, item]);
  };

  return (
    <NhiemVuContext.Provider
      value={{ nhiemVu, nhanNhiemVu, xoaNhiemVu, nhiemVuHoanThanh, luuNhiemVuHoanThanh }}
    >
      {children}
    </NhiemVuContext.Provider>
  );
};

export { NhiemVuContext, NhiemVuProvider };