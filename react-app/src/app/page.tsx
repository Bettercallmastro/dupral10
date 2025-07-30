'use client';

import { useEffect, useState } from 'react';
import { PageData } from '../types';
import Page from '../components/Page/Page';
import apiService from '../services/api';
import TextButtonsSection from '../components/TextButtonsSection/TextButtonsSection';
import HeadingButtonsImageSection from '../components/HeadingButtonsImageSection/HeadingButtonsImageSection';
import Hero from '../components/Hero/Hero';

export default function Home() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiService.getPageData();
        setPageData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching page data:', err);
        setError('Failed to load page data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.125rem',
        color: 'var(--color-text)'
      }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.125rem',
        color: 'var(--color-error)',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div>
          <h2>Error</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.125rem',
        color: 'var(--color-text)'
      }}>
        No data available
      </div>
    );
  }

  return <Page data={pageData} />;
}
