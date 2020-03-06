<!-- =========================================================================================
    File Name: FormWizardNumberTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="extra-component-form-wizard-demo">
<template>
    <vx-card title="Proposal">
        <div class="mt-5">
            <form-wizard color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="null" :subtitle="null" finishButtonText="Submit">
				
                 <tab-content title="Data Pribadi Pemohon/Calon Mitra Binaan" class="mb-5" icon="feather icon-home" :before-change="validateStep1">
          <vs-divider/>
          <!-- tab 1 content -->
          <form data-vv-scope="step-1">
          <div class="vx-row">
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="Nama (Sesuai KTP)" v-model="nama_ktp_calon_mitra" class="w-full" name="nama_ktp_calon_mitra" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-1.nama_ktp_calon_mitra') }}</span>
            </div>
             <div class="vx-col w-1/2 mt-5">
              <ul class="demo-alignment">
                <!-- <span>Status Rumah</span> -->
                <li>
                  <vs-radio v-model="jenis_kelamin" vs-value="pria">Pria</vs-radio>
                </li>
                <li>
                  <vs-radio v-model="jenis_kelamin" vs-value="wanita">Wanita</vs-radio>
                </li>
                <!-- <span class="text-danger">{{ errors.first('step-1.jenis_kelamin') }}</span> -->
              </ul>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="NO. KTP" v-model="no_ktp_calon_mitra" class="w-full" name="no_ktp_calon_mitra" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-1.no_ktp_calon_mitra') }}</span>
            </div>          
            
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="Tempat Lahir" v-model="tempat_lahir_calon_mitra" class="w-full" name="tempat_lahir_calon_mitra" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-1.tempat_lahir_calon_mitra') }}</span>
            </div>
            <div class="vx-col w-1/2">
                <vs-textarea v-model="alamat_calon_mitra" label="Alamat" class="mt-10 mb-0" rows="3" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-1.alamat_calon_mitra') }}</span>
              </div>
            <div class="vx-col w-1/2 mt-5">             
              <label for="" class="vs-input--label">Tanggal Lahir</label>
              <flat-pickr label="Tanggal Lahir" class="vs-input--input normal flatpickr-input" v-model="tanggal_lahir_calon_mitra" />
              <!-- <span class="text-danger">{{ errors.first('step-1.tanggal_lahir_calon_mitra') }}</span> -->
            </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="No Rumah" v-model="no_rumah_calon_mitra" class="w-full" name="no_rumah_calon_mitra" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-1.no_rumah_calon_mitra') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="RT" v-model="rt_calon_mitra" class="w-full" name="rt_calon_mitra" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-1.rt_calon_mitra') }}</span>
                </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="RW" v-model="rw_calon_mitra" class="w-full" name="rw_calon_mitra" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-1.rw_calon_mitra') }}</span>
              </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="Kelurahan" v-model="kelurahan_calon_mitra" class="w-full" name="kelurahan_calon_mitra" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-1.kelurahan_calon_mitra') }}</span>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="Kecamatan" v-model="kecamatan_calon_mitra" class="w-full" name="kecamatan_calon_mitra" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-1.kecamatan_calon_mitra') }}</span>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="Kabupaten/Kota" v-model="kabupaten_kota_calon_mitra" class="w-full" name="kabupaten_kota_calon_mitra" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-1.kabupaten_kota_calon_mitra') }}</span>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="Provinsi" v-model="provinsi_calon_mitra" class="w-full" name="provinsi_calon_mitra" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-1.provinsi_calon_mitra') }}</span>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="Kode POS" v-model="kode_pos_calon_mitra" class="w-full" name="kode_pos_calon_mitra" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-1.kode_pos_calon_mitra') }}</span>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="No. Telepon Rumah" v-model="no_telp_rumah_calon_mitra" class="w-full" name="no_telp_rumah_calon_mitra" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-1.no_telp_rumah_calon_mitra') }}</span>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-input label="No. HP" v-model="no_hp_calon_mitra" class="w-full" name="no_hp_calon_mitra" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-1.no_hp_calon_mitra') }}</span>
            </div>
            <div class="vx-col w-1/2 mt-5">     
              <label for="" class="vs-input--label">Pendidikan Terakhir</label>
              <vs-select
                autocomplete
                class="w-full select-large"
                v-model="pendidikan_terakhir"
                >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in pendidikan" />
              </vs-select>
              <!-- <span class="text-danger">{{ errors.first('step-1.pendidikan_terakhir') }}</span> -->
            </div>
            <div class="vx-col w-full mt-5">
              <ul class="demo-alignment">
                <span>Status Rumah</span>
                <li>
                  <vs-radio v-model="status_rumah" vs-value="milik_sendiri">Milik Sendiri</vs-radio>
                </li>
                <li>
                  <vs-radio v-model="status_rumah" vs-value="keluarga">Keluarga</vs-radio>
                </li>
                <li>
                  <vs-radio v-model="status_rumah" vs-value="kontrak">Kontrak</vs-radio>
                </li>
                <li>
                  <vs-radio v-model="status_rumah" vs-value="sewa">Sewa</vs-radio>
                </li>
              </ul>
            </div>
          </div>
          </form>
        </tab-content>

        <!-- tab 2 content -->
        <tab-content title="Data Suami/Istri Pemohon" class="mb-5" icon="feather icon-user" :before-change="validateStep2">
          <vs-divider/>
          <form data-vv-scope="step-2">
           <div class="vx-row">
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Nama (Sesuai KTP)" v-model="nama_ktp_suami_istri_calon" class="w-full" name="nama_ktp_suami_istri_calon" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-2.nama_ktp_suami_istri_calon') }}</span>
              </div>
               
              <div class="vx-col w-1/2">
                  <vs-textarea v-model="alamat_suami_istri_calon" label="Alamat" class="mt-10 mb-0" rows="3" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-2.alamat_suami_istri_calon') }}</span>
                </div>
              
                <div class="vx-col w-1/2 mt-5">
                  <vs-input label="No Rumah" v-model="no_rumah_suami_istri_calon" class="w-full" name="no_rumah_suami_istri_calon" v-validate="'required'" />
                  <span class="text-danger">{{ errors.first('step-2.no_rumah_suami_istri_calon') }}</span>
                </div>
                <div class="vx-col w-1/2 mt-5">
                  <vs-input label="RT" v-model="rt_suami_istri_calon" class="w-full" name="rt_suami_istri_calon" v-validate="'required|numeric'" />
                  <span class="text-danger">{{ errors.first('step-2.rt_suami_istri_calon') }}</span>
                  </div>
                <div class="vx-col w-1/2 mt-5">
                  <vs-input label="RW" v-model="rw_suami_istri_calon" class="w-full" name="rw_suami_istri_calon" v-validate="'required|numeric'" />
                  <span class="text-danger">{{ errors.first('step-2.rw_suami_istri_calon') }}</span>
                </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Kelurahan" v-model="kelurahan_suami_istri_calon" class="w-full" name="kelurahan_suami_istri_calon" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-2.kelurahan_suami_istri_calon') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Kecamatan" v-model="kecamatan_suami_istri_calon" class="w-full" name="kecamatan_suami_istri_calon" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-2.kecamatan_suami_istri_calon') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Kabupaten/Kota" v-model="kabupaten_kota_suami_istri_calon" class="w-full" name="kabupaten_kota_suami_istri_calon" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-2.kabupaten_kota_suami_istri_calon') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Provinsi" v-model="provinsi_suami_istri_calon" class="w-full" name="provinsi_suami_istri_calon" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-2.provinsi_suami_istri_calon') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Kode POS" v-model="kode_pos_suami_istri_calon" class="w-full" name="kode_pos_suami_istri_calon" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-2.kode_pos_suami_istri_calon') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="No. Telepon Rumah" v-model="no_telp_rumah_suami_istri_calon" class="w-full" name="no_telp_rumah_suami_istri_calon" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-2.no_telp_rumah_suami_istri_calon') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="No. HP" v-model="no_hp_suami_istri_calon" class="w-full" name="no_hp_suami_istri_calon" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-2.no_hp_suami_istri_calon') }}</span>
              </div>
              
              
            </div>
          </form>
        </tab-content>

        <!-- tab 3 content -->
        <tab-content title="Data Usaha Pemohon" class="mb-5" icon="feather icon-briefcase" :before-change="validateStep3">
          <vs-divider/>
          <form data-vv-scope="step-3">
          <div class="vx-row">
            <div class="vx-col w-full mt-5">
                <ul class="demo-alignment">
                  <span>Bentuk Usaha</span>
                  <li>
                    <vs-radio v-model="bentuk_usaha" vs-value="berbadan_hukum">Berbadan Hukum</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="bentuk_usaha" vs-value="perorangan">Perorangan</vs-radio>
                  </li>
                </ul>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="No & Tgl SIUP/Ijin (Bila ada)" v-model="no_tgl_siup" class="w-full" name="no_tgl_siup" />                
              </div>
               <div class="vx-col w-1/2 mt-5">
                  <vs-input label="NPWP (Bila ada)" v-model="npwp" class="w-full" name="npwp" v-validate="'numeric'" />
                  <span class="text-danger">{{ errors.first('step-3.npwp') }}</span>
                </div>

                <div class="vx-col w-1/2 mt-5">             
                  <label for="" class="vs-input--label">Mulai Usaha</label>
                  <flat-pickr label="Mulai Usaha" class="vs-input--input normal flatpickr-input" v-model="mulai_usaha" />
                  <!-- <span class="text-danger">{{ errors.first('step-1.tanggal_lahir_calon_mitra') }}</span> -->
                </div>

                <div class="vx-col w-1/2 mt-5">
                  <vs-input label="Nama Usaha" v-model="nama_usaha" class="w-full" name="nama_usaha" v-validate="'required'" />
                  <span class="text-danger">{{ errors.first('step-3.nama_usaha') }}</span>
                  </div>
                  <div class="vx-col w-1/2 mt-5">
                    <vs-input label="Jenis Usaha" v-model="jenis_usaha" class="w-full" name="jenis_usaha" v-validate="'required'" />
                    <span class="text-danger">{{ errors.first('step-3.jenis_usaha') }}</span>
                  </div>
                <div class="vx-col w-full mt-5">
                <ul class="demo-alignment">
                  <span>Sektor Usaha</span>
                  <li>
                    <vs-radio v-model="sektor_usaha" vs-value="industri">Industri</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="sektor_usaha" vs-value="perdagangan">Perdagangan</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="sektor_usaha" vs-value="pertanian">Pertanian</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="sektor_usaha" vs-value="peternakan">Peternakan</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="sektor_usaha" vs-value="perkebunan">Perkebunan</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="sektor_usaha" vs-value="perikanan">Perikanan</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="sektor_usaha" vs-value="jasa">Jasa</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="sektor_usaha" vs-value="jasa_lainnya">Jasa Lainnya</vs-radio>
                  </li>
                </ul>
              </div>
              <div class="vx-col w-1/2">
                  <vs-textarea v-model="alamat_usaha" label="Alamat Usaha" class="mt-10 mb-0" rows="3" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-3.alamat_usaha') }}</span>
                </div>

              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Kelurahan" v-model="kelurahan_usaha" class="w-full" name="kelurahan_usaha" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-3.kelurahan_usaha') }}</span>
              </div>
              
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Nomor" v-model="nomor_alamat_usaha" class="w-full" name="nomor_alamat_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.nomor_alamat_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="RT" v-model="rt_usaha" class="w-full" name="rt_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.rt_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="RW" v-model="rw_usaha" class="w-full" name="rw_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.rw_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Kecamatan" v-model="kecamatan_usaha" class="w-full" name="kecamatan_usaha" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-3.kecamatan_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Kode POS" v-model="kode_pos_usaha" class="w-full" name="kode_pos_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.kode_pos_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Kabupaten/Kota" v-model="kabupaten_kota_usaha" class="w-full" name="kabupaten_kota_usaha" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-3.kabupaten_kota_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Provinsi" v-model="provinsi_usaha" class="w-full" name="provinsi_usaha" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-3.provinsi_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="No. Telp Usaha" v-model="no_telp_usaha" class="w-full" name="no_telp_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.no_telp_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="No. HP" v-model="no_hp_usaha" class="w-full" name="no_hp_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.no_hp_usaha') }}</span>
              </div>
              <div class="vx-col w-full mt-5">
                <ul class="demo-alignment">
                  <span>Status Tempat Usaha</span>
                  <li>
                    <vs-radio v-model="status_tempat_usaha" vs-value="milik_sendiri">Milik Sendiri</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="status_tempat_usaha" vs-value="keluarga">Keluarga</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="status_tempat_usaha" vs-value="kontrak">Kontrak</vs-radio>
                  </li>
                  <li>
                    <vs-radio v-model="status_tempat_usaha" vs-value="sewa">Sewa</vs-radio>
                  </li>
                </ul>
              </div>
               
              <div class="vx-col w-1/2 mt-5">             
                  <label for="" class="vs-input--label">Masa Laku Sewa s.d</label>
                  <flat-pickr label="Masa Laku Sewa s.d" class="vs-input--input normal flatpickr-input" v-model="masa_laku_sewa_usaha" />
                  <!-- <span class="text-danger">{{ errors.first('step-1.tanggal_lahir_calon_mitra') }}</span> -->
                </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Nama Bank" v-model="nama_bank_usaha" class="w-full" name="nama_bank_usaha" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-3.nama_bank_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="No. Rekening" v-model="no_rekening_usaha" class="w-full" name="no_rekening_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.no_rekening_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Atas Nama" v-model="atas_nama_usaha" class="w-full" name="atas_nama_usaha" v-validate="'required'" />
                <span class="text-danger">{{ errors.first('step-3.atas_nama_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Jumlah SDM (Orang)" v-model="jumlah_sdm_usaha" class="w-full" name="jumlah_sdm_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.jumlah_sdm_usaha') }}</span>
              </div>
               <div class="vx-col w-1/2 mt-5">
                <vs-input label="Jumlah Aset (Rp)" v-model="jumlah_aset_usaha" class="w-full" name="jumlah_aset_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.jumlah_aset_usaha') }}</span>
              </div>
              <div class="vx-col w-1/2 mt-5">
                <vs-input label="Jumlah Omzet/6 Bulan (Rp)" v-model="jumlah_omzet_per_enam_bulan_usaha" class="w-full" name="jumlah_omzet_per_enam_bulan_usaha" v-validate="'required|numeric'" />
                <span class="text-danger">{{ errors.first('step-3.jumlah_omzet_per_enam_bulan_usaha') }}</span>
              </div>              
            </div>
          </form>
        </tab-content>

        <!-- tab 4 content -->
        <tab-content title="Data Jaminan Tanah/Bangunan/Kendaraan" class="mb-5" icon="feather icon-image" :before-change="validateStep4">
          <vs-divider/>
          <form data-vv-scope="step-4">
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <vs-input label="Jaminan Tanah/Bangunan" v-model="jaminan_tanah_bangunan" class="w-full mt-5" name="jaminan_tanah_bangunan" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-4.jaminan_tanah_bangunan') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-input label="Atas Nama Tanah/Bangunan" v-model="atas_nama_tanah_bangunan" class="w-full mt-5" name="atas_nama_tanah_bangunan" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-4.atas_nama_tanah_bangunan') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-input label="No Sertifikat Tanah/Bangunan" v-model="no_sertifikat_tanah_bangunan" class="w-full mt-5" name="no_sertifikat_tanah_bangunan" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-4.no_sertifikat_tanah_bangunan') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-textarea v-model="alamat_tanah_bangunan" label="Alamat Tanah/Bangunan" class="mt-10 mb-0" rows="3" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-4.alamat_tanah_bangunan') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-input label="Luas Tanah/Bangunan" v-model="luas_tanah_bangunan" class="w-full mt-5" name="luas_tanah_bangunan" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-4.luas_tanah_bangunan') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-input label="Harga (Rp) Tanah/Bangunan" v-model="harga_tanah_bangunan" class="w-full mt-5" name="harga_tanah_bangunan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-4.harga_tanah_bangunan') }}</span>
            </div>
            <vs-divider> Jaminan Kendaraan </vs-divider>
            <div class="vx-col w-1/2">
              <vs-input label="Jaminan Kendaraan" v-model="jaminan_kendaraan" class="w-full mt-5" name="jaminan_kendaraan" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-4.jaminan_kendaraan') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-input label="No BPKP Kendaraan" v-model="no_bpkp_kendaraan" class="w-full mt-5" name="no_bpkp_kendaraan" v-validate="'required'" />
              <span class="text-danger">{{ errors.first('step-4.no_bpkp_kendaraan') }}</span>
            </div>
          </div>
          </form>
        </tab-content>

        <!-- tab 5 content -->
        <tab-content title="Data Pinjaman" class="mb-5" icon="feather icon-image" :before-change="validateStep5">
          <vs-divider/>
          <form data-vv-scope="step-5">
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <vs-input label="Rencana Pinjaman Modal Kerja" v-model="rencana_pinjaman_modal_kerja" class="w-full mt-5" name="rencana_pinjaman_modal_kerja" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-5.rencana_pinjaman_modal_kerja') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-input label="Pinjaman Modal Kerja yang Dibutuhkan" v-model="pinjaman_modal_kerja_dibutuhkan" class="w-full mt-5" name="pinjaman_modal_kerja_dibutuhkan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-5.pinjaman_modal_kerja_dibutuhkan') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Rencana Pinjaman Modal Investasi" v-model="rencana_pinjaman_modal_investasi" class="w-full mt-5" name="rencana_pinjaman_modal_investasi" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-5.rencana_pinjaman_modal_investasi') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-input label="Pinjaman Modal Investasi yang Dibutuhkan" v-model="pinjaman_modal_investasi_dibutuhkan" class="w-full mt-5" name="pinjaman_modal_investasi_dibutuhkan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-5.pinjaman_modal_investasi_dibutuhkan') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Rencana Pinjaman Modal Khusus" v-model="rencana_pinjaman_modal_khusus" class="w-full mt-5" name="rencana_pinjaman_modal_khusus" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-5.rencana_pinjaman_modal_khusus') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-input label="Pinjaman Modal Khusus yang Dibutuhkan" v-model="pinjaman_modal_khusus_dibutuhkan" class="w-full mt-5" name="pinjaman_modal_khusus_dibutuhkan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-5.pinjaman_modal_khusus_dibutuhkan') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Jumlah Pinjaman yang Dibutuhkan" v-model="jumlah_pinjaman" class="w-full mt-5" name="jumlah_pinjaman" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-5.jumlah_pinjaman') }}</span>
            </div>
           
          </div>
          </form>
        </tab-content>

        <!-- tab 6 content -->
        <tab-content title="Kelengkapan Data" class="mb-5" icon="feather icon-image" :before-change="validateStep6">
          <form data-vv-scope="step-6">
          <!-- <div class="vx-row"> -->
            <template lang="html">
            <div>
            <vs-table  :data="users">
                <template slot="thead">
                  <vs-th>
                    Jenis
                  </vs-th>
                  <vs-th>
                    Unggah File
                  </vs-th>
                  <vs-th>
                    Aksi
                  </vs-th>
                </template>
                 <template >
                <vs-tr >
                    <vs-td> Pas photo Pemohon Ukuran 3x4 </vs-td>
                    <vs-td> <input type="file" @change="onFileChanged"> </vs-td>
                    <vs-td> <vs-button color="success" type="filled" @click="onUpload" icon-pack="feather" icon="icon-upload">Upload</vs-button></vs-td>
                </vs-tr>
                <vs-tr >
                    <vs-td> Pas photo Pemohon Ukuran 3x4 </vs-td>
                    <vs-td> <input type="file" @change="onFileChanged"> </vs-td>
                    <vs-td> <vs-button color="success" type="filled" @click="onUpload" icon-pack="feather" icon="icon-upload">Upload</vs-button> </vs-td>
                </vs-tr>
                <vs-tr >
                    <vs-td> Photo Copy KTP Pemohon </vs-td>
                    <vs-td> <input type="file" @change="onFileChanged"> </vs-td>
                    <vs-td> <vs-button color="success" type="filled" @click="onUpload" icon-pack="feather" icon="icon-upload">Upload</vs-button> </vs-td>
                </vs-tr>
                <vs-tr >
                    <vs-td> Photo Copy KTP Pemohon </vs-td>
                    <vs-td> <input type="file" @change="onFileChanged"> </vs-td>
                    <vs-td> <vs-button color="success" type="filled" @click="onUpload" icon-pack="feather" icon="icon-upload">Upload</vs-button> </vs-td>
                </vs-tr>
                <vs-tr >
                    <vs-td> Photo Kegiatan Usaha Ukuran 2R </vs-td>
                    <vs-td> <input type="file" @change="onFileChanged"> </vs-td>
                    <vs-td> <vs-button color="success" type="filled" @click="onUpload" icon-pack="feather" icon="icon-upload">Upload</vs-button> </vs-td>
                </vs-tr>
                <vs-tr >
                    <vs-td> Denah Lokasi Tempat Usaha </vs-td>
                    <vs-td> <input type="file" @change="onFileChanged"> </vs-td>
                    <vs-td> <vs-button color="success" type="filled" @click="onUpload" icon-pack="feather" icon="icon-upload">Upload</vs-button> </vs-td>
                </vs-tr>
                </template> 

            </vs-table>
            </div>
            </template>
          <!-- </div> -->
          </form>
        </tab-content>
                 
                 <!-- tab 7 content -->
        <tab-content title="Data Keuangan" class="mb-5" icon="feather icon-image" :before-change="validateStep7">
          <form data-vv-scope="step-7">
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <vs-input label="Uang KAS" v-model="uang_kas_keuangan" class="w-full mt-5" name="uang_kas_keuangan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-7.uang_kas_keuangan') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Uang di Bank/Tabungan" v-model="uang_di_bank" class="w-full mt-5" name="uang_di_bank" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-7.uang_di_bank') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Piutang" v-model="piutang_keuangan" class="w-full mt-5" name="uang_di_bank" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-7.uang_di_bank') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Hutang Bank/Kredit" v-model="hutang_bank_keuangan" class="w-full mt-5" name="hutang_bank_keuangan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-7.hutang_bank_keuangan') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Nilai Peralatan Usaha" v-model="nilai_peralatan_usaha_keuangan" class="w-full mt-5" name="nilai_peralatan_usaha_keuangan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-7.nilai_peralatan_usaha_keuangan') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Nilai Omzet per Bulan" v-model="nilai_omzet_per_bulan_keuangan" class="w-full mt-5" name="nilai_omzet_per_bulan_keuangan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-7.nilai_omzet_per_bulan_keuangan') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Biaya Operasional per Bulan" v-model="biaya_operasional_per_bulan_keuangan" class="w-full mt-5" name="biaya_operasional_per_bulan_keuangan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-7.biaya_operasional_per_bulan_keuangan') }}</span>
            </div>

            <div class="vx-col w-1/2">
              <vs-input label="Biaya Non Operasional" v-model="biaya_non_operasional_keuangan" class="w-full mt-5" name="biaya_non_operasional_keuangan" v-validate="'required|numeric'" />
              <span class="text-danger">{{ errors.first('step-7.biaya_non_operasional_keuangan') }}</span>
            </div>
              <vs-alert active="true" class="mt-5" icon-pack="feather" icon="icon-star">
                Catatan : Data Keuangan (Nilai Peralatan Usaha, Nilai Omzet per Bulan, Biaya Operasional per Bulan) lebih rinci dapat dilihat di lampiran
              </vs-alert>
          </div>
          </form>
        </tab-content>

        <!-- tab 8 content -->
        <!-- <tab-content title="Kelengkapan Data" class="mb-5" icon="feather icon-image" :before-change="validateStep8">
          <form data-vv-scope="step-8">
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" name="event_name" v-validate="'required|alpha_spaces'" />
              <span class="text-danger">{{ errors.first('step-3.event_name') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
              </vs-select>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-select v-model="status" class="w-full select-large" label="Event Status">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in pendidikan_terakhir" class="w-full" />
              </vs-select>
            </div>
            <div class="vx-col w-1/2 mt-8">
              <div class="demo-alignment">
                <span>Requirements:</span>
                <vs-checkbox>Staffing</vs-checkbox>
                <vs-checkbox>Catering</vs-checkbox>
              </div>
            </div>
          </div>
          </form>
        </tab-content> -->

        <!-- tab 9 content -->
        <!-- <tab-content title="Denah Lokasi Usaha" class="mb-5" icon="feather icon-image" :before-change="validateStep9">
          <form data-vv-scope="step-9">
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" name="event_name" v-validate="'required|alpha_spaces'" />
              <span class="text-danger">{{ errors.first('step-3.event_name') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
              </vs-select>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-select v-model="status" class="w-full select-large" label="Event Status">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in pendidikan_terakhir" class="w-full" />
              </vs-select>
            </div>
            <div class="vx-col w-1/2 mt-8">
              <div class="demo-alignment">
                <span>Requirements:</span>
                <vs-checkbox>Staffing</vs-checkbox>
                <vs-checkbox>Catering</vs-checkbox>
              </div>
            </div>
          </div>
          </form>
        </tab-content> -->


        <!-- tab 10 content -->
        <!-- <tab-content title="Data Keuangan" class="mb-5" icon="feather icon-image" :before-change="validateStep10">
          <form data-vv-scope="step-10">
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" name="event_name" v-validate="'required|alpha_spaces'" />
              <span class="text-danger">{{ errors.first('step-3.event_name') }}</span>
            </div>
            <div class="vx-col w-1/2">
              <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
              </vs-select>
            </div>
            <div class="vx-col w-1/2 mt-5">
              <vs-select v-model="status" class="w-full select-large" label="Event Status">
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in pendidikan_terakhir" class="w-full" />
              </vs-select>
            </div>
            <div class="vx-col w-1/2 mt-8">
              <div class="demo-alignment">
                <span>Requirements:</span>
                <vs-checkbox>Staffing</vs-checkbox>
                <vs-checkbox>Catering</vs-checkbox>
              </div>
            </div>
          </div>
          </form>
        </tab-content> -->


            </form-wizard>
        </div>
    </vx-card>
</template>
    </div>
</template>
<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import Datepicker from 'vuejs-datepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import vSelect from 'vue-select'
import axios from "../../axios";


// For custom error message
import { Validator } from 'vee-validate';
const dict = {
    custom: {
        // tanggal_lahir_calon_mitra: {
        //     required: 'Tanggal Lahir harus diisi',
        //     // alpha: "Nama hanya boleh berisi karakter alfabet"
        // },
        tempat_lahir_calon_mitra: {
            required: 'Tempat Lahir harus diisi',            
        },
        nama_ktp_calon_mitra: {
            required: 'Nama Sesuai KTP harus diisi',            
        },
        no_ktp_calon_mitra: {
            required: 'NO KTP harus diisi',
            numeric: "NO KTP hanya boleh berisi angka"
        },
        alamat_calon_mitra: {
            required: 'Alamat harus diisi',
        },
        kelurahan_calon_mitra: {
            required: 'Kelurahan harus diisi',
        },
        no_rumah_calon_mitra: {
            required: 'No Rumah harus diisi',            
        },
        rt_calon_mitra: {
            required: 'RT harus diisi',
            numeric: "RT hanya boleh berisi angka"
        },        
        rw_calon_mitra: {
            required: 'RW harus diisi',
            numeric: "RW hanya boleh berisi angka"
        },
        kecamatan_calon_mitra: {
            required: 'Kecamatan harus diisi',
        },
        kode_pos_calon_mitra: {
            required: 'Kode POS harus diisi',
            numeric: "Kode POS hanya boleh berisi angka"
        },
        kabupaten_kota_calon_mitra: {
            required: 'Kabupaten/Kota harus diisi',
        },
        provinsi_calon_mitra: {
            required: 'Provinsi harus diisi',
        },        
        no_telp_rumah_calon_mitra: {
            required: 'No Telp Rumah harus diisi',
            numeric: "No Telp Rumah hanya boleh berisi angka"
        },
        no_hp_calon_mitra: {
            required: 'No HP harus diisi',
            numeric: "No HP hanya boleh berisi angka"
        },
        pendidikan_terakhir: {
            required: 'Pendidikan terakhir harus diisi',
            alpha: "Pendidikan terakhir hanya boleh berisi karakter alfabet"
        },
        // status_rumah: {
        //     required: 'Pendidikan terakhir harus diisi',
        //     // alpha: "Pendidikan terakhir hanya boleh berisi karakter alfabet"
        // },
        // jenis_kelamin: {
        //     required: 'Pendidikan terakhir harus diisi',
        //     // alpha: "Pendidikan terakhir hanya boleh berisi karakter alfabet"
        // },


        nama_ktp_suami_istri_calon: {
            required: 'Nama Sesuai KTP harus diisi',            
        },
        alamat_suami_istri_calon: {
            required: 'Alamat harus diisi',
        },
        kelurahan_suami_istri_calon: {
            required: 'Kelurahan harus diisi',
        },
        no_rumah_suami_istri_calon: {
            required: 'No Rumah harus diisi',            
        },
        rt_suami_istri_calon: {
            required: 'RT harus diisi',
            numeric: "RT hanya boleh berisi angka"
        },        
        rw_suami_istri_calon: {
            required: 'RW harus diisi',
            numeric: "RW hanya boleh berisi angka"
        },
        kecamatan_suami_istri_calon: {
            required: 'Kecamatan harus diisi',
        },
        kode_pos_suami_istri_calon: {
            required: 'Kode POS harus diisi',
            numeric: "Kode POS hanya boleh berisi angka"
        },
        kabupaten_kota_suami_istri_calon: {
            required: 'Kabupaten/Kota harus diisi',
        },
        provinsi_suami_istri_calon: {
            required: 'Provinsi harus diisi',
        },        
        no_telp_rumah_suami_istri_calon: {
            required: 'No Telp Rumah harus diisi',
            numeric: "No Telp Rumah hanya boleh berisi angka"
        },
        no_hp_suami_istri_calon: {
            required: 'No HP harus diisi',
            numeric: "No HP hanya boleh berisi angka"
        },


        no_tgl_siup: {
            required: 'No Tgl SIUP/Ijin harus diisi',            
        },
        npwp: {
            required: 'NPWP harus diisi',    
            numeric: "NPWP hanya boleh berisi angka"        
        },
        nama_usaha: {
            required: 'Nama usaha harus diisi',                
        },
        jenis_usaha: {
            required: 'Jenis usaha harus diisi',                
        },
        alamat_usaha: {
            required: 'Alamat usaha harus diisi',                
        },
        kelurahan_usaha: {
            required: 'Kelurahan usaha harus diisi',                
        },
        nomor_alamat_usaha: {
            required: 'Nomor alamat usaha harus diisi',     
            numeric: "Nomor alamat usaha hanya boleh berisi angka"           
        },
        rt_usaha: {
            required: 'RT usaha harus diisi',     
            numeric: "RT hanya boleh berisi angka"           
        },
        rw_usaha: {
            required: 'RW usaha harus diisi',   
            numeric: "RW hanya boleh berisi angka"             
        },
        kecamatan_usaha: {
            required: 'Kecamatan usaha harus diisi',               
        },
        kode_pos_usaha: {
            required: 'Kode POS usaha harus diisi',   
            numeric: "Kode POS hanya boleh berisi angka"             
        },
        kabupaten_kota_usaha: {
            required: 'Kabupaten/Kota usaha harus diisi',             
        },
        provinsi_usaha: {
            required: 'Provinsi usaha harus diisi',               
        },
        no_telp_usaha: {
            required: 'No Telp usaha harus diisi',   
            numeric: "No Telp hanya boleh berisi angka"             
        },
        no_hp_usaha: {
            required: 'No HP usaha harus diisi',   
            numeric: "No HP hanya boleh berisi angka"             
        },
        nama_bank_usaha: {
            required: 'Nama Bank usaha harus diisi',   
        },
        no_rekening_usaha: {
            required: 'No Rekening usaha harus diisi',   
            numeric: "No Rekening hanya boleh berisi angka"             
        },
        atas_nama_usaha: {
            required: 'Atas Nama usaha harus diisi',   
            // alpha: "Atas Nama hanya boleh berisi angka"             
        },
        jumlah_sdm_usaha: {
            required: 'Jumlah SDM usaha harus diisi',   
            numeric: "Jumlah SDM hanya boleh berisi angka"             
        },
        jumlah_aset_usaha: {
            required: 'Jumlah Aset usaha harus diisi',   
            numeric: "Jumlah Aset hanya boleh berisi angka"             
        },
        jumlah_omzet_per_enam_bulan_usaha: {
            required: 'Jumlah Omzet usaha harus diisi',   
            numeric: "Jumlah Omzet hanya boleh berisi angka"             
        },
        jaminan_tanah_bangunan: {
            required: 'Jaminan tanah/bangunan harus diisi',          
        },
        atas_nama_tanah_bangunan: {
            required: 'Atas Nama tanah/bangunan harus diisi',   
        },
        no_sertifikat_tanah_bangunan: {
            required: 'No Sertifikat tanah/bangunan harus diisi',   
        },
        alamat_tanah_bangunan: {
            required: 'Alamat tanah/bangunan harus diisi',   
        },
        luas_tanah_bangunan: {
            required: 'Luas tanah/bangunan harus diisi',   
        },
        harga_tanah_bangunan: {
            required: 'Harga tanah/bangunan harus diisi',   
            numeric: 'Harga hanya boleh berisi angka',   
        },
        jaminan_kendaraan: {
            required: 'Jaminan Kendaraan harus diisi',   
        },
        no_bpkp_kendaraan: {
            required: 'No BPKP Kendaraan harus diisi',   
        },
        rencana_pinjaman_modal_kerja: {
            required: 'Rencana Pinjaman Modal Kerja harus diisi',   
            numeric: 'Rencana Pinjaman Modal Kerja hanya boleh berisi angka',   
        },
        pinjaman_modal_kerja_dibutuhkan: {
            required: 'Pinjaman Modal Kerja yang Dibutuhkan harus diisi',   
            numeric: 'Pinjaman Modal Kerja yang Dibutuhkan hanya boleh berisi angka',   
        },
        rencana_pinjaman_modal_investasi: {
            required: 'Rencana Pinjaman Modal Investasi harus diisi',   
            numeric: 'Rencana Pinjaman Modal Investasi hanya boleh berisi angka',   
        },
        pinjaman_modal_investasi_dibutuhkan: {
            required: 'Pinjaman Modal Investasi yang Dibutuhkan harus diisi',   
            numeric: 'Pinjaman Modal Investasi yang Dibutuhkan hanya boleh berisi angka',   
        },
        rencana_pinjaman_modal_khusus: {
            required: 'Rencana Pinjaman Modal Khusus harus diisi',   
            numeric: 'Rencana Pinjaman Modal Khusus hanya boleh berisi angka',   
        },
        pinjaman_modal_khusus_dibutuhkan: {
            required: 'Pinjaman Modal Khusus yang Dibutuhkan harus diisi',   
            numeric: 'Pinjaman Modal Khusus yang Dibutuhkan hanya boleh berisi angka',   
        },
        jumlah_pinjaman: {
            required: 'Jumlah Pinjaman harus diisi',   
            numeric: 'Jumlah Pinjaman hanya boleh berisi angka',   
        },


        uang_di_bank: {
            required: 'Uang di Bank harus diisi',   
            numeric: 'Uang di Bank hanya boleh berisi angka',   
        },
        piutang_keuangan: {
            required: 'Piutang harus diisi',   
            numeric: 'Piutang hanya boleh berisi angka',   
        },
        hutang_bank_keuangan: {
            required: 'Hutang Bank harus diisi',   
            numeric: 'Hutang Bank hanya boleh berisi angka',   
        },
        nilai_peralatan_usaha_keuangan: {
            required: 'Nilai Peralatan Usaha harus diisi',   
            numeric: 'Nilai Peralatan Usaha hanya boleh berisi angka',   
        },
        nilai_omzet_per_bulan_keuangan: {
            required: 'Nilai Omzet per Bulan harus diisi',   
            numeric: 'Nilai Omzet per Bulan hanya boleh berisi angka',   
        },
        biaya_operasional_per_bulan_keuangan: {
            required: 'Biaya Operasional per Bulan harus diisi',   
            numeric: 'Biaya Operasional per Bulan hanya boleh berisi angka',   
        },
        biaya_non_operasional_keuangan: {
            required: 'Biaya Non Operasional harus diisi',   
            numeric: 'Biaya Operasional hanya boleh berisi angka',   
        },
    }
};

// register custom messages
Validator.localize('en', dict);

var tanggal_lahir_calon_mitra 
var tempat_lahir_calon_mitra
var nama_ktp_calon_mitra
var no_ktp_calon_mitra
var alamat_calon_mitra
var kelurahan_calon_mitra
var no_rumah_calon_mitra
var rt_calon_mitra
var rw_calon_mitra
var kecamatan_calon_mitra
var kode_pos_calon_mitra
var kabupaten_kota_calon_mitra
var provinsi_calon_mitra
var no_telp_rumah_calon_mitra
var no_hp_calon_mitra
var pendidikan_terakhir
var status_rumah
var jenis_kelamin

var nama_ktp_suami_istri_calon
var alamat_suami_istri_calon
var no_rumah_suami_istri_calon
var rt_suami_istri_calon
var rw_suami_istri_calon
var kelurahan_suami_istri_calon
var kecamatan_suami_istri_calon
var kode_pos_suami_istri_calon
var kabupaten_kota_suami_istri_calon
var provinsi_suami_istri_calon
var no_telp_rumah_suami_istri_calon
var no_hp_suami_istri_calon

var bentuk_usaha
var no_tgl_siup
var npwp
var mulai_usaha
var nama_usaha
var jenis_usaha
var sektor_usaha
var alamat_usaha
var kelurahan_usaha
var nomor_alamat_usaha
var rt_usaha
var rw_usaha
var kecamatan_usaha
var kode_pos_usaha
var kabupaten_kota_usaha
var provinsi_usaha
var no_telp_usaha
var no_hp_usaha
var status_tempat_usaha
var masa_laku_sewa_usaha
var nama_bank_usaha
var no_rekening_usaha
var atas_nama_usaha
var jumlah_sdm_usaha
var jumlah_aset_usaha
var jumlah_omzet_per_enam_bulan_usaha

var jaminan_tanah_bangunan
var atas_nama_tanah_bangunan
var no_sertifikat_tanah_bangunan
var alamat_tanah_bangunan
var luas_tanah_bangunan
var harga_tanah_bangunan
var jaminan_kendaraan
var no_bpkp_kendaraan

var rencana_pinjaman_modal_kerja
var pinjaman_modal_kerja_dibutuhkan
var rencana_pinjaman_modal_investasi
var pinjaman_modal_investasi_dibutuhkan
var rencana_pinjaman_modal_khusus
var pinjaman_modal_khusus_dibutuhkan
var jumlah_pinjaman


var uang_kas_keuangan
var uang_di_bank
var piutang_keuangan
var hutang_bank_keuangan
var nilai_peralatan_usaha_keuangan
var nilai_omzet_per_bulan_keuangan
var biaya_operasional_per_bulan_keuangan
var biaya_non_operasional_keuangan

export default {
    data() {
        return {
             users:[
      {
        // "id": 1,
        // "name": "Leanne Graham",
        // "username": "Bret",
        // "email": "Sincere@april.biz",
        // "website": "hildegard.org",
      },      
    ],
            selectedFile: '',
            tanggal_lahir_calon_mitra: null,
            tempat_lahir_calon_mitra: "",
            nama_ktp_calon_mitra: "",
            no_ktp_calon_mitra: "",
            alamat_calon_mitra: "",
            kelurahan_calon_mitra: "",
            no_rumah_calon_mitra: "",
            rt_calon_mitra: "",
            rw_calon_mitra: "",
            kecamatan_calon_mitra: "",
            kode_pos_calon_mitra: "",
            kabupaten_kota_calon_mitra: "",
            provinsi_calon_mitra: "",
            no_telp_rumah_calon_mitra: "",
            no_hp_calon_mitra: "",
            pendidikan_terakhir:"",
            status_rumah:"",
            jenis_kelamin:"",

            nama_ktp_suami_istri_calon: "",
            alamat_suami_istri_calon: "",
            no_rumah_suami_istri_calon: "",
            rt_suami_istri_calon: "",
            rw_suami_istri_calon: "",
            kelurahan_suami_istri_calon: "",
            kecamatan_suami_istri_calon: "",
            kode_pos_suami_istri_calon: "",
            kabupaten_kota_suami_istri_calon: "",
            provinsi_suami_istri_calon: "",
            no_telp_rumah_suami_istri_calon: "",
            no_hp_suami_istri_calon: "",

            bentuk_usaha: "",
            no_tgl_siup: "",
            npwp: "",
            mulai_usaha: "",
            nama_usaha: "",
            jenis_usaha: "",
            sektor_usaha: "",
            alamat_usaha: "",
            kelurahan_usaha: "",
            nomor_alamat_usaha: "",
            rt_usaha: "",
            rw_usaha: "",
            kecamatan_usaha: "",
            kode_pos_usaha: "",
            kabupaten_kota_usaha: "",
            provinsi_usaha: "",
            no_telp_usaha: "",
            no_hp_usaha: "",
            status_tempat_usaha: "",
            masa_laku_sewa_usaha: "",
            nama_bank_usaha: "",
            no_rekening_usaha: "",
            atas_nama_usaha: "",
            jumlah_sdm_usaha: "",
            jumlah_aset_usaha: "",
            jumlah_omzet_per_enam_bulan_usaha: "",

            jaminan_tanah_bangunan: "",
            atas_nama_tanah_bangunan: "",
            no_sertifikat_tanah_bangunan: "",
            alamat_tanah_bangunan: "",
            luas_tanah_bangunan: "",
            harga_tanah_bangunan: "",
            jaminan_kendaraan: "",
            no_bpkp_kendaraan: "",

            rencana_pinjaman_modal_kerja: "",
            pinjaman_modal_kerja_dibutuhkan: "",
            rencana_pinjaman_modal_investasi: "",
            pinjaman_modal_investasi_dibutuhkan: "",
            rencana_pinjaman_modal_khusus: "",
            pinjaman_modal_khusus_dibutuhkan: "",
            jumlah_pinjaman: "",

            uang_kas_keuangan: "",
            uang_di_bank: "",
            piutang_keuangan: "",
            hutang_bank_keuangan: "",
            nilai_peralatan_usaha_keuangan: "",
            nilai_omzet_per_bulan_keuangan: "",
            biaya_operasional_per_bulan_keuangan: "",
            biaya_non_operasional_keuangan: "",

            pendidikan: [
                { text: "SD", value: "SD" },
                { text: "SMP", value: "SMP" },
                { text: "SMA", value: "SMA" },
                { text: "D3", value: "D3" },
                { text: "D4", value: "D4" },
                { text: "S1", value: "S1" },
                { text: "S2", value: "S2" },
                { text: "S3", value: "S3" },
            ],
        }
    },
    methods: {
        validateStep1() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll('step-1').then(result => {
                    if (result) {
                        // alert("Form submitted!");    
                        let data = {
                          tanggal_lahir_calon_mitra: this.tanggal_lahir_calon_mitra,
                          tempat_lahir_calon_mitra: this.tempat_lahir_calon_mitra,
                          nama_ktp_calon_mitra: this.nama_ktp_calon_mitra,
                          no_ktp_calon_mitra: this.no_ktp_calon_mitra,
                          alamat_calon_mitra: this.alamat_calon_mitra,
                          kelurahan_calon_mitra: this.kelurahan_calon_mitra,
                          no_rumah_calon_mitra: this.no_rumah_calon_mitra,
                          rt_calon_mitra: this.rt_calon_mitra,
                          rw_calon_mitra: this.rw_calon_mitra,
                          kecamatan_calon_mitra: this.kecamatan_calon_mitra,
                          kode_pos_calon_mitra: this.kode_pos_calon_mitra,
                          kabupaten_kota_calon_mitra: this.kabupaten_kota_calon_mitra,
                          provinsi_calon_mitra: this.provinsi_calon_mitra,
                          no_telp_rumah_calon_mitra: this.no_telp_rumah_calon_mitra,
                          no_hp_calon_mitra: this.no_hp_calon_mitra,
                          pendidikan_terakhir: this.pendidikan_terakhir,
                          status_rumah: this.status_rumah,
                          jenis_kelamin: this.jenis_kelamin,
                        };   
                        // console.log(data)        
                        axios
                          .post("/api/mitra", data)
                          .then(response => {                            
                            console.log(response.data);
                          })
                          .catch(e => {
                            console.log(e);
                          });

                        resolve(true)
                    } else {
                        
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep2() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-2").then(result => {
                    if (result) {
                      alert("Form submitted!");
                      let data = {
                        nama_ktp_suami_istri_calon: this.nama_ktp_suami_istri_calon,
                        alamat_suami_istri_calon: this.alamat_suami_istri_calon,
                        no_rumah_suami_istri_calon: this.no_rumah_suami_istri_calon,
                        rt_suami_istri_calon: this.rt_suami_istri_calon,
                        rw_suami_istri_calon: this.rw_suami_istri_calon,
                        kelurahan_suami_istri_calon: this.kelurahan_suami_istri_calon,
                        kecamatan_suami_istri_calon: this.kecamatan_suami_istri_calon,
                        kode_pos_suami_istri_calon: this.kode_pos_suami_istri_calon,
                        kabupaten_kota_suami_istri_calon: this.kabupaten_kota_suami_istri_calon,
                        provinsi_suami_istri_calon: this.provinsi_suami_istri_calon,
                        no_telp_rumah_suami_istri_calon: this.no_telp_rumah_suami_istri_calon,
                        no_hp_suami_istri_calon: this.no_hp_suami_istri_calon,
                      };
                      console.log(data)
                      resolve(true)
                      
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep3() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-3").then(result => {
                    if (result) {
                        // alert("Form submitted!");
                        let data = {
                          bentuk_usaha: this.bentuk_usaha,
                          no_tgl_siup: this.no_tgl_siup,
                          npwp: this.npwp,
                          mulai_usaha: this.mulai_usaha,
                          nama_usaha: this.nama_usaha,
                          jenis_usaha: this.jenis_usaha,
                          sektor_usaha: this.sektor_usaha,
                          alamat_usaha: this.alamat_usaha,
                          kelurahan_usaha: this.kelurahan_usaha,
                          nomor_alamat_usaha: this.nomor_alamat_usaha,
                          rt_usaha: this.rt_usaha,
                          rw_usaha: this.rw_usaha,
                          kecamatan_usaha: this.kecamatan_usaha,
                          kode_pos_usaha: this.kode_pos_usaha,
                          kabupaten_kota_usaha: this.kabupaten_kota_usaha,
                          provinsi_usaha: this.provinsi_usaha,
                          no_telp_usaha: this.no_telp_usaha,
                          no_hp_usaha: this.no_hp_usaha,
                          status_tempat_usaha: this.status_tempat_usaha,
                          masa_laku_sewa_usaha: this.masa_laku_sewa_usaha,
                          nama_bank_usaha: this.nama_bank_usaha,
                          no_rekening_usaha: this.no_rekening_usaha,
                          atas_nama_usaha: this.atas_nama_usaha,
                          jumlah_sdm_usaha: this.jumlah_sdm_usaha,
                          jumlah_aset_usaha: this.jumlah_aset_usaha,
                          jumlah_omzet_per_enam_bulan_usaha: this.jumlah_omzet_per_enam_bulan_usaha,
                        };
                        // console.log(data)                          
                        
                        resolve(true)
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep4() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-4").then(result => {
                    if (result) {
                        alert("Form submitted!");
                        let data = {
                          jaminan_tanah_bangunan: this.jaminan_tanah_bangunan,
                          atas_nama_tanah_bangunan: this.atas_nama_tanah_bangunan,
                          no_sertifikat_tanah_bangunan: this.no_sertifikat_tanah_bangunan,
                          alamat_tanah_bangunan: this.alamat_tanah_bangunan,
                          luas_tanah_bangunan: this.luas_tanah_bangunan,
                          harga_tanah_bangunan: this.harga_tanah_bangunan,
                          jaminan_kendaraan: this.jaminan_kendaraan,
                          no_bpkp_kendaraan: this.no_bpkp_kendaraan,
                        }
                        console.log(data)
                        resolve(true)
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep5() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-5").then(result => {
                    if (result) {
                        alert("Form submitted!");
                        let data = {
                          rencana_pinjaman_modal_kerja: this.rencana_pinjaman_modal_kerja,
                          pinjaman_modal_kerja_dibutuhkan: this.pinjaman_modal_kerja_dibutuhkan,
                          rencana_pinjaman_modal_investasi: this.rencana_pinjaman_modal_investasi,
                          pinjaman_modal_investasi_dibutuhkan: this.pinjaman_modal_investasi_dibutuhkan,
                          rencana_pinjaman_modal_khusus: this.rencana_pinjaman_modal_khusus,
                          pinjaman_modal_khusus_dibutuhkan: this.pinjaman_modal_khusus_dibutuhkan,
                          jumlah_pinjaman: this.jumlah_pinjaman,
                        }
                        console.log(data)
                        resolve(true)
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep6() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-6").then(result => {
                    if (result) {
                        alert("Form submitted!");
                        resolve(true)
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep7() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-7").then(result => {
                    if (result) {
                        alert("Form submitted!");
                        let data = {
                          uang_kas_keuangan: this.uang_kas_keuangan,
                          uang_di_bank: this.uang_di_bank,
                          piutang_keuangan: this.piutang_keuangan,
                          hutang_bank_keuangan: this.hutang_bank_keuangan,
                          nilai_peralatan_usaha_keuangan: this.nilai_peralatan_usaha_keuangan,
                          nilai_omzet_per_bulan_keuangan: this.nilai_omzet_per_bulan_keuangan,
                          biaya_operasional_per_bulan_keuangan: this.biaya_operasional_per_bulan_keuangan,
                          biaya_non_operasional_keuangan: this.biaya_non_operasional_keuangan,
                        }                 
                        console.log(data)       
                        resolve(true)
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep8() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-8").then(result => {
                    if (result) {
                        alert("Form submitted!");
                        resolve(true)
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep9() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-9").then(result => {
                    if (result) {
                        alert("Form submitted!");
                        resolve(true)
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        validateStep10() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-10").then(result => {
                    if (result) {
                        alert("Form submitted!");
                        resolve(true)
                    } else {
                        reject("correct all values");
                    }
                })
            })
        },
        // successUpload() {
        //     this.$vs.notify({ color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur' })
        // },
        onFileChanged (event) {
          this.selectedFile = event.target.files[0]
        },
        onUpload() {
          // upload file
          console.log(this.selectedFile)                    
            let formData = new FormData();
            formData.append('file', this.selectedFile);
            axios.post( 'http://localhost:7001/api/uploadfile',
                    formData, { headers: { 'Content-Type': 'multipart/form-data'} }
                ).then(function(){
            console.log('SUCCESS!!');
            })
            .catch(function(){
            console.log('FAILURE!!');
            });         
        }

    },
    components: {
        FormWizard,
        TabContent,
        Datepicker,
        flatPickr,
        'v-select': vSelect
    }
}
</script>
