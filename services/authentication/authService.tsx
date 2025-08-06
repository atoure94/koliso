import { api } from '../api';

export async function login(phone: string, password: string) {
    try {
        const response = await api.post('/auth/login', { phone, password });
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401 || error.response?.status === 400) {
            throw new Error('Phone ou mot de passe erroné');
        }
        if (error.response?.data?.message) {
            throw new Error('L\'utilisateur n\'existe pas');
        }
        throw new Error('Erreur de connexion');
    }
}

export async function signup(data: { firstName: string; lastName: string; phone: string; password: string }) {
  try {
    const response = await api.post('/auth/signup', data);
    return response.data; // { message: 'Vérifiez votre téléphone pour le code OTP.' }
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Erreur lors de l\'inscription');
  }
}

export async function verifyOtp(phone: string, otp: string) {
  try {
    const response = await api.post('/auth/verify-otp', { phone, otp });
    return response.data; // { access_token, user }
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Erreur lors de la vérification OTP');
  }
}

export async function resendOtp(phone: string) {
  try {
    const response = await api.post('/auth/resend-otp', { phone });
    return response.data; // { message: 'OTP renvoyé avec succès.' }
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Erreur lors de l\'envoi du code OTP');
  }
}

export async function sendForgotPasswordOtp(phone: string) {
    try {
        const response = await api.post('/auth/forgot-password', { phone });
        return response.data; // { message: 'Un code a été envoyé à votre téléphone.' }
    } catch (error: any) {
        if (error.response?.data?.message) {
            throw new Error(error.response.data.message);
        }
        throw new Error('Erreur lors de l\'envoi du code OTP');
    }
}