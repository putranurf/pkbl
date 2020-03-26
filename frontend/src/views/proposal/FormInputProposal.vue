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
      <vx-card title="Calon Mitra">
       
            <form>               

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Nama (Sesuai KTP)</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input
                      v-model="nama_ktp_calon_mitra"
                      class="w-full"
                      name="nama_ktp_calon_mitra"
                      v-validate="'required'"
                    />
                    <span class="text-danger">{{ errors.first('nama_ktp_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Jenis Kelamin</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                 <ul class="">
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
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>No. KTP</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                 <vs-input
                      v-model="no_ktp_calon_mitra"
                      class="w-full"
                      name="no_ktp_calon_mitra"
                      v-validate="'required|numeric'"
                    />
                    <span class="text-danger">{{ errors.first('no_ktp_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Tempat Lahir</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input
                      v-model="tempat_lahir_calon_mitra"
                      class="w-full"
                      name="tempat_lahir_calon_mitra"
                      v-validate="'required'"
                    />
                    <span class="text-danger">{{ errors.first('tempat_lahir_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Alamat</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-textarea
                      v-model="alamat_calon_mitra"
                      rows="3"
                      v-validate="'required'"
                    />
                    <span class="text-danger">{{ errors.first('alamat_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Tanggal Lahir</span>
              </div>
              <div class="vx-col sm:w-1/4 w-full">
                <flat-pickr
                      class="vs-input--input normal flatpickr-input"
                      v-model="tanggal_lahir_calon_mitra"
                    />
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>No. Rumah</span>
              </div>
              <div class="vx-col sm:w-1/6 w-full">
                <vs-input
                      v-model="no_rumah_calon_mitra"
                      class="w-full"
                      name="no_rumah_calon_mitra"
                      v-validate="'required'"
                    />
                    <span class="text-danger">{{ errors.first('no_rumah_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>RT</span>
              </div>
              <div class="vx-col sm:w-1/6 w-full">
                 <vs-input
                      v-model="rt_calon_mitra"
                      class="w-full"
                      name="rt_calon_mitra"
                      v-validate="'required|numeric'"
                    />
                    <span class="text-danger">{{ errors.first('rt_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>RW</span>
              </div>
              <div class="vx-col sm:w-1/6 w-full">
                 <vs-input
                      v-model="rw_calon_mitra"
                      class="w-full"
                      name="rw_calon_mitra"
                      v-validate="'required|numeric'"
                    />
                    <span class="text-danger">{{ errors.first('rw_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Kelurahan</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                  <vs-input
                      v-model="kelurahan_calon_mitra"
                      class="w-full"
                      name="kelurahan_calon_mitra"
                      v-validate="'required'"
                    />
                    <span class="text-danger">{{ errors.first('kelurahan_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Kecamatan</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                   <vs-input
                      v-model="kecamatan_calon_mitra"
                      class="w-full"
                      name="kecamatan_calon_mitra"
                      v-validate="'required'"
                    />
                    <span class="text-danger">{{ errors.first('kecamatan_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Kabupaten/Kota</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                   <vs-input
                      v-model="kabupaten_kota_calon_mitra"
                      class="w-full"
                      name="kabupaten_kota_calon_mitra"
                      v-validate="'required'"
                    />
                    <span
                      class="text-danger"
                    >{{ errors.first('kabupaten_kota_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Provinsi</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                   <vs-input
                      v-model="provinsi_calon_mitra"
                      class="w-full"
                      name="provinsi_calon_mitra"
                      v-validate="'required'"
                    />
                    <span class="text-danger">{{ errors.first('provinsi_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Kode POS</span>
              </div>
              <div class="vx-col sm:w-1/6 w-full">
                   <vs-input
                      v-model="kode_pos_calon_mitra"
                      class="w-full"
                      name="kode_pos_calon_mitra"
                      v-validate="'required|numeric'"
                    />
                    <span class="text-danger">{{ errors.first('kode_pos_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>No. Telepon Rumah</span>
              </div>
              <div class="vx-col sm:w-1/6 w-full">
                    <vs-input
                      v-model="no_telp_rumah_calon_mitra"
                      class="w-full"
                      name="no_telp_rumah_calon_mitra"
                      v-validate="'required|numeric'"
                    />
                    <span class="text-danger">{{ errors.first('no_telp_rumah_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>No. HP</span>
              </div>
              <div class="vx-col sm:w-1/6 w-full">
                     <vs-input
                      v-model="no_hp_calon_mitra"
                      class="w-full"
                      name="no_hp_calon_mitra"
                      v-validate="'required|numeric'"
                    />
                    <span class="text-danger">{{ errors.first('no_hp_calon_mitra') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Pendidikan Terakhir</span>
              </div>
              <div class="vx-col sm:w-1/6 w-full">
                      <vs-select
                      autocomplete
                      class="w-full select-large"
                      v-model="pendidikan_terakhir"
                    >
                      <vs-select-item
                        :key="index"
                        :value="item.value"
                        :text="item.text"
                        v-for="(item,index) in pendidikan"
                      />
                    </vs-select>
                    <span class="text-danger">{{ errors.first('pendidikan_terakhir') }}</span>
              </div>
            </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/4 w-full">
                <span>Status Rumah</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                      <ul class="">
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

            <div class="vx-row">
              <div class="vx-col sm:w-3/4 w-full ml-auto">
                 <vs-button type="filled" @click.prevent="validateStep1" class="mr-3 mb-2">Submit</vs-button>
              </div>
            </div>
            </form>            
      </vx-card>
    </template>
  </div>
</template>
</div>
</template>
<script>
// import {FormWizard, TabContent} from 'vue-form-wizard'
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import Datepicker from "vuejs-datepicker";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import vSelect from "vue-select";
import axios from "../../axios";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
  custom: {
    // tanggal_lahir_calon_mitra: {
    //     required: 'Tanggal Lahir harus diisi',
    //     // alpha: "Nama hanya boleh berisi karakter alfabet"
    // },
    tempat_lahir_calon_mitra: {
      required: "Tempat Lahir harus diisi"
    },
    nama_ktp_calon_mitra: {
      required: "Nama Sesuai KTP harus diisi"
    },
    no_ktp_calon_mitra: {
      required: "NO KTP harus diisi",
      numeric: "NO KTP hanya boleh berisi angka"
    },
    alamat_calon_mitra: {
      required: "Alamat harus diisi"
    },
    kelurahan_calon_mitra: {
      required: "Kelurahan harus diisi"
    },
    no_rumah_calon_mitra: {
      required: "No Rumah harus diisi"
    },
    rt_calon_mitra: {
      required: "RT harus diisi",
      numeric: "RT hanya boleh berisi angka"
    },
    rw_calon_mitra: {
      required: "RW harus diisi",
      numeric: "RW hanya boleh berisi angka"
    },
    kecamatan_calon_mitra: {
      required: "Kecamatan harus diisi"
    },
    kode_pos_calon_mitra: {
      required: "Kode POS harus diisi",
      numeric: "Kode POS hanya boleh berisi angka"
    },
    kabupaten_kota_calon_mitra: {
      required: "Kabupaten/Kota harus diisi"
    },
    provinsi_calon_mitra: {
      required: "Provinsi harus diisi"
    },
    no_telp_rumah_calon_mitra: {
      required: "No Telp Rumah harus diisi",
      numeric: "No Telp Rumah hanya boleh berisi angka"
    },
    no_hp_calon_mitra: {
      required: "No HP harus diisi",
      numeric: "No HP hanya boleh berisi angka"
    },
    pendidikan_terakhir: {
      required: "Pendidikan terakhir harus diisi",
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
      required: "Nama Sesuai KTP harus diisi"
    },
    alamat_suami_istri_calon: {
      required: "Alamat harus diisi"
    },
    kelurahan_suami_istri_calon: {
      required: "Kelurahan harus diisi"
    },
    no_rumah_suami_istri_calon: {
      required: "No Rumah harus diisi"
    },
    rt_suami_istri_calon: {
      required: "RT harus diisi",
      numeric: "RT hanya boleh berisi angka"
    },
    rw_suami_istri_calon: {
      required: "RW harus diisi",
      numeric: "RW hanya boleh berisi angka"
    },
    kecamatan_suami_istri_calon: {
      required: "Kecamatan harus diisi"
    },
    kode_pos_suami_istri_calon: {
      required: "Kode POS harus diisi",
      numeric: "Kode POS hanya boleh berisi angka"
    },
    kabupaten_kota_suami_istri_calon: {
      required: "Kabupaten/Kota harus diisi"
    },
    provinsi_suami_istri_calon: {
      required: "Provinsi harus diisi"
    },
    no_telp_rumah_suami_istri_calon: {
      required: "No Telp Rumah harus diisi",
      numeric: "No Telp Rumah hanya boleh berisi angka"
    },
    no_hp_suami_istri_calon: {
      required: "No HP harus diisi",
      numeric: "No HP hanya boleh berisi angka"
    },

    no_tgl_siup: {
      required: "No Tgl SIUP/Ijin harus diisi"
    },
    npwp: {
      required: "NPWP harus diisi",
      numeric: "NPWP hanya boleh berisi angka"
    },
    nama_usaha: {
      required: "Nama usaha harus diisi"
    },
    jenis_usaha: {
      required: "Jenis usaha harus diisi"
    },
    alamat_usaha: {
      required: "Alamat usaha harus diisi"
    },
    kelurahan_usaha: {
      required: "Kelurahan usaha harus diisi"
    },
    nomor_alamat_usaha: {
      required: "Nomor alamat usaha harus diisi",
      numeric: "Nomor alamat usaha hanya boleh berisi angka"
    },
    rt_usaha: {
      required: "RT usaha harus diisi",
      numeric: "RT hanya boleh berisi angka"
    },
    rw_usaha: {
      required: "RW usaha harus diisi",
      numeric: "RW hanya boleh berisi angka"
    },
    kecamatan_usaha: {
      required: "Kecamatan usaha harus diisi"
    },
    kode_pos_usaha: {
      required: "Kode POS usaha harus diisi",
      numeric: "Kode POS hanya boleh berisi angka"
    },
    kabupaten_kota_usaha: {
      required: "Kabupaten/Kota usaha harus diisi"
    },
    provinsi_usaha: {
      required: "Provinsi usaha harus diisi"
    },
    no_telp_usaha: {
      required: "No Telp usaha harus diisi",
      numeric: "No Telp hanya boleh berisi angka"
    },
    no_hp_usaha: {
      required: "No HP usaha harus diisi",
      numeric: "No HP hanya boleh berisi angka"
    },
    nama_bank_usaha: {
      required: "Nama Bank usaha harus diisi"
    },
    no_rekening_usaha: {
      required: "No Rekening usaha harus diisi",
      numeric: "No Rekening hanya boleh berisi angka"
    },
    atas_nama_usaha: {
      required: "Atas Nama usaha harus diisi"
      // alpha: "Atas Nama hanya boleh berisi angka"
    },
    jumlah_sdm_usaha: {
      required: "Jumlah SDM usaha harus diisi",
      numeric: "Jumlah SDM hanya boleh berisi angka"
    },
    jumlah_aset_usaha: {
      required: "Jumlah Aset usaha harus diisi",
      numeric: "Jumlah Aset hanya boleh berisi angka"
    },
    jumlah_omzet_per_enam_bulan_usaha: {
      required: "Jumlah Omzet usaha harus diisi",
      numeric: "Jumlah Omzet hanya boleh berisi angka"
    },
    jaminan_tanah_bangunan: {
      required: "Jaminan tanah/bangunan harus diisi"
    },
    atas_nama_tanah_bangunan: {
      required: "Atas Nama tanah/bangunan harus diisi"
    },
    no_sertifikat_tanah_bangunan: {
      required: "No Sertifikat tanah/bangunan harus diisi"
    },
    alamat_tanah_bangunan: {
      required: "Alamat tanah/bangunan harus diisi"
    },
    luas_tanah_bangunan: {
      required: "Luas tanah/bangunan harus diisi"
    },
    harga_tanah_bangunan: {
      required: "Harga tanah/bangunan harus diisi",
      numeric: "Harga hanya boleh berisi angka"
    },
    jaminan_kendaraan: {
      required: "Jaminan Kendaraan harus diisi"
    },
    no_bpkp_kendaraan: {
      required: "No BPKP Kendaraan harus diisi"
    },
    rencana_pinjaman_modal_kerja: {
      required: "Rencana Pinjaman Modal Kerja harus diisi",
      numeric: "Rencana Pinjaman Modal Kerja hanya boleh berisi angka"
    },
    pinjaman_modal_kerja_dibutuhkan: {
      required: "Pinjaman Modal Kerja yang Dibutuhkan harus diisi",
      numeric: "Pinjaman Modal Kerja yang Dibutuhkan hanya boleh berisi angka"
    },
    rencana_pinjaman_modal_investasi: {
      required: "Rencana Pinjaman Modal Investasi harus diisi",
      numeric: "Rencana Pinjaman Modal Investasi hanya boleh berisi angka"
    },
    pinjaman_modal_investasi_dibutuhkan: {
      required: "Pinjaman Modal Investasi yang Dibutuhkan harus diisi",
      numeric:
        "Pinjaman Modal Investasi yang Dibutuhkan hanya boleh berisi angka"
    },
    rencana_pinjaman_modal_khusus: {
      required: "Rencana Pinjaman Modal Khusus harus diisi",
      numeric: "Rencana Pinjaman Modal Khusus hanya boleh berisi angka"
    },
    pinjaman_modal_khusus_dibutuhkan: {
      required: "Pinjaman Modal Khusus yang Dibutuhkan harus diisi",
      numeric: "Pinjaman Modal Khusus yang Dibutuhkan hanya boleh berisi angka"
    },
    jumlah_pinjaman: {
      required: "Jumlah Pinjaman harus diisi",
      numeric: "Jumlah Pinjaman hanya boleh berisi angka"
    },

    uang_di_bank: {
      required: "Uang di Bank harus diisi",
      numeric: "Uang di Bank hanya boleh berisi angka"
    },
    piutang_keuangan: {
      required: "Piutang harus diisi",
      numeric: "Piutang hanya boleh berisi angka"
    },
    hutang_bank_keuangan: {
      required: "Hutang Bank harus diisi",
      numeric: "Hutang Bank hanya boleh berisi angka"
    },
    nilai_peralatan_usaha_keuangan: {
      required: "Nilai Peralatan Usaha harus diisi",
      numeric: "Nilai Peralatan Usaha hanya boleh berisi angka"
    },
    nilai_omzet_per_bulan_keuangan: {
      required: "Nilai Omzet per Bulan harus diisi",
      numeric: "Nilai Omzet per Bulan hanya boleh berisi angka"
    },
    biaya_operasional_per_bulan_keuangan: {
      required: "Biaya Operasional per Bulan harus diisi",
      numeric: "Biaya Operasional per Bulan hanya boleh berisi angka"
    },
    biaya_non_operasional_keuangan: {
      required: "Biaya Non Operasional harus diisi",
      numeric: "Biaya Operasional hanya boleh berisi angka"
    }
  }
};

// register custom messages
Validator.localize("en", dict);

var tanggal_lahir_calon_mitra;
var tempat_lahir_calon_mitra;
var nama_ktp_calon_mitra;
var no_ktp_calon_mitra;
var alamat_calon_mitra;
var kelurahan_calon_mitra;
var no_rumah_calon_mitra;
var rt_calon_mitra;
var rw_calon_mitra;
var kecamatan_calon_mitra;
var kode_pos_calon_mitra;
var kabupaten_kota_calon_mitra;
var provinsi_calon_mitra;
var no_telp_rumah_calon_mitra;
var no_hp_calon_mitra;
var pendidikan_terakhir;
var status_rumah;
var jenis_kelamin;

var nama_ktp_suami_istri_calon;
var alamat_suami_istri_calon;
var no_rumah_suami_istri_calon;
var rt_suami_istri_calon;
var rw_suami_istri_calon;
var kelurahan_suami_istri_calon;
var kecamatan_suami_istri_calon;
var kode_pos_suami_istri_calon;
var kabupaten_kota_suami_istri_calon;
var provinsi_suami_istri_calon;
var no_telp_rumah_suami_istri_calon;
var no_hp_suami_istri_calon;

var bentuk_usaha;
var no_tgl_siup;
var npwp;
var mulai_usaha;
var nama_usaha;
var jenis_usaha;
var sektor_usaha;
var alamat_usaha;
var kelurahan_usaha;
var nomor_alamat_usaha;
var rt_usaha;
var rw_usaha;
var kecamatan_usaha;
var kode_pos_usaha;
var kabupaten_kota_usaha;
var provinsi_usaha;
var no_telp_usaha;
var no_hp_usaha;
var status_tempat_usaha;
var masa_laku_sewa_usaha;
var nama_bank_usaha;
var no_rekening_usaha;
var atas_nama_usaha;
var jumlah_sdm_usaha;
var jumlah_aset_usaha;
var jumlah_omzet_per_enam_bulan_usaha;

var jaminan_tanah_bangunan;
var atas_nama_tanah_bangunan;
var no_sertifikat_tanah_bangunan;
var alamat_tanah_bangunan;
var luas_tanah_bangunan;
var harga_tanah_bangunan;
var jaminan_kendaraan;
var no_bpkp_kendaraan;

var rencana_pinjaman_modal_kerja;
var pinjaman_modal_kerja_dibutuhkan;
var rencana_pinjaman_modal_investasi;
var pinjaman_modal_investasi_dibutuhkan;
var rencana_pinjaman_modal_khusus;
var pinjaman_modal_khusus_dibutuhkan;
var jumlah_pinjaman;

var uang_kas_keuangan;
var uang_di_bank;
var piutang_keuangan;
var hutang_bank_keuangan;
var nilai_peralatan_usaha_keuangan;
var nilai_omzet_per_bulan_keuangan;
var biaya_operasional_per_bulan_keuangan;
var biaya_non_operasional_keuangan;

export default {
  data() {
    return {
      users: [
        {
          // "id": 1,
          // "name": "Leanne Graham",
          // "username": "Bret",
          // "email": "Sincere@april.biz",
          // "website": "hildegard.org",
        }
      ],
      selectedFile: "",
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
      pendidikan_terakhir: "",
      status_rumah: "",
      jenis_kelamin: "",

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
        { text: "S3", value: "S3" }
      ]
    };
  },
  methods: {
    finishButton(){
      alert('Done')
    },
    onComplete: function() {
      alert("Yay. Done!");
    },
    isLastStep() {
      if (this.$refs.wizard) {
        return this.$refs.wizard.isLastStep;
      }
      return false;
    },
    validateStep1() {      
      // return new Promise((resolve, reject) => {
        this.$validator.validateAll().then(result => {
          if (result) {
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
              jenis_kelamin: this.jenis_kelamin
            };
            // axios
            //   .post("/api/mitra", data)
            //   .then(response => {
            //     console.log(response.data);
            //   })
            //   .catch(e => {
            //     console.log(e);
            //   });
            alert('submitted')

            // resolve(true);
          } 
        });
      // });
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
              kabupaten_kota_suami_istri_calon: this
                .kabupaten_kota_suami_istri_calon,
              provinsi_suami_istri_calon: this.provinsi_suami_istri_calon,
              no_telp_rumah_suami_istri_calon: this
                .no_telp_rumah_suami_istri_calon,
              no_hp_suami_istri_calon: this.no_hp_suami_istri_calon
            };
            console.log(data);
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep3() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-3").then(result => {
          if (result) {
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
              jumlah_omzet_per_enam_bulan_usaha: this
                .jumlah_omzet_per_enam_bulan_usaha
            };
            // console.log(data)

            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
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
              no_bpkp_kendaraan: this.no_bpkp_kendaraan
            };
            console.log(data);
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep5() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-5").then(result => {
          if (result) {
            alert("Form submitted!");
            let data = {
              rencana_pinjaman_modal_kerja: this.rencana_pinjaman_modal_kerja,
              pinjaman_modal_kerja_dibutuhkan: this
                .pinjaman_modal_kerja_dibutuhkan,
              rencana_pinjaman_modal_investasi: this
                .rencana_pinjaman_modal_investasi,
              pinjaman_modal_investasi_dibutuhkan: this
                .pinjaman_modal_investasi_dibutuhkan,
              rencana_pinjaman_modal_khusus: this.rencana_pinjaman_modal_khusus,
              pinjaman_modal_khusus_dibutuhkan: this
                .pinjaman_modal_khusus_dibutuhkan,
              jumlah_pinjaman: this.jumlah_pinjaman
            };
            console.log(data);
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep6() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-6").then(result => {
          if (result) {
            alert("Form submitted!");
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
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
              nilai_peralatan_usaha_keuangan: this
                .nilai_peralatan_usaha_keuangan,
              nilai_omzet_per_bulan_keuangan: this
                .nilai_omzet_per_bulan_keuangan,
              biaya_operasional_per_bulan_keuangan: this
                .biaya_operasional_per_bulan_keuangan,
              biaya_non_operasional_keuangan: this
                .biaya_non_operasional_keuangan
            };
            console.log(data);
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep8() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-8").then(result => {
          if (result) {
            alert("Form submitted!");
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep9() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-9").then(result => {
          if (result) {
            alert("Form submitted!");
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep10() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-10").then(result => {
          if (result) {
            alert("Form submitted!");
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    // successUpload() {
    //     this.$vs.notify({ color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur' })
    // },
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      // upload file
      console.log(this.selectedFile);
      let formData = new FormData();
      formData.append("file", this.selectedFile);
      axios
        .post("http://localhost:7001/api/uploadfile", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    }
  },
  components: {
    // FormWizard,
    // TabContent,
    Datepicker,
    flatPickr,
    "v-select": vSelect
  }
};
</script>
